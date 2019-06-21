const electron = require('electron');
const { autoUpdater } = require("electron-updater");
const WebSocket = require('ws');

const path = require('path');
const http = require('http');
const url = require('url');
const isDev = require('electron-is-dev');
const uuidv4 = require('uuid/v4');
const flatten = require('lodash/flatten');

const package = require('../package');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const menu = electron.Menu;

let masterSocket;
let agentSocket;
let serverPort = 10086;

let mainWindow;

let activityID;
let token;

menu.setApplicationMenu(menu.buildFromTemplate([
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'delete' },
      { role: 'selectall' }
    ]
  },
  {
    label: 'Help',
    role: 'help',
    submenu: [
      {
        label: 'Submit feedback...',
        click: function () {
          electron.shell.openExternal(package.bugs.url);
        }
      },
      {
        role: 'about',
      },
    ]
  }
]));

app.on('ready', initApp);
app.on('window-all-closed', () => {
  app.quit();
  agentSocket.close(() => {
    console.log("Server closed.")
  });
});
app.on('activate', initApp);

function initApp() {
  if (!mainWindow) {
    createWindow();
  }
  if (!agentSocket) {
    createServer();
  }
}


function createWindow() {
  mainWindow = new BrowserWindow({ width: 1024, height: 768 });
  const homeURL = isDev ? 'http://localhost:3000/' : `file://${path.join(__dirname, '../build/index.html')}`;
  mainWindow.loadURL(`${homeURL}`);
  mainWindow.on('closed', () => mainWindow = null);
  mainWindow.setAutoHideMenuBar(true);
  autoUpdater.checkForUpdatesAndNotify();
}

function createServer() {
  const serverIPInfo = getServerIPInfo();

  const server = http.createServer();
  server.listen(serverPort, '0.0.0.0');
  server.on('listening', () => {
    console.log(`Server listen on ${server.address().address}:${server.address().port}, activityID: ${activityID}`);
  });
  server.on('error', () => {
    server.listen(++serverPort);
  });
  server.on('upgrade', (request, socket, head) => {
    const pathname = url.parse(request.url).pathname;
    if (pathname === `/agent`) {
      if (!activityID) {
        activityID = uuidv4();
        token = uuidv4();
      }
      agentSocket.handleUpgrade(request, socket, head, function done(ws) {
        agentSocket.emit('connection', ws, request);
      });
    } else if (pathname === `/master/${activityID}`) {
      masterSocket.handleUpgrade(request, socket, head, function done(ws) {
        masterSocket.emit('connection', ws, request);
      });
    } else {
      console.log(pathname);
      socket.destroy();
    }
  });

  agentSocket = new WebSocket.Server({ noServer: true });
  agentSocket.on('connection', function connection(ws, req) {
    ws.on('message', function incoming(message) {
      boardCastMsg(masterSocket, {
        message
      });
    });
    boardCastMsg(agentSocket, {
      serverIPInfo,
      activityID,
      token,
      port: server.address().port
    });
  });

  masterSocket = new WebSocket.Server({ noServer: true });
  masterSocket.on('connection', function connection(ws, req) {
    ws.on('message', function incoming(message) {
      boardCastMsg(agentSocket, {
        message
      });
    });
    ws.send(JSON.stringify({
      size: agentSocket.clients.size,
    }));
  });
  const timer = setInterval(function () {
    token = uuidv4();
    boardCastMsg(agentSocket, {
      serverIPInfo,
      activityID,
      token,
      port: server.address().port
    });
    // clearInterval(timer);
    // };
  }, 10000);

}

function boardCastMsg(socket, msg) {
  const Base64 = require('js-base64').Base64;
  socket.clients.forEach(client => {
    client.send(Base64.encode(JSON.stringify(msg)));
  })
}

function getServerIPInfo() {
  const int2ip = ipInt => {
    return ((ipInt >>> 24) + '.' + (ipInt >> 16 & 255) + '.' + (ipInt >> 8 & 255) + '.' + (ipInt & 255));
  };

  const ip2int = ip => {
    return ip.split('.').reduce(function (ipInt, octet) {
      return (ipInt << 8) + parseInt(octet, 10)
    }, 0) >>> 0;
  };
  const ifaces = require('os').networkInterfaces();
  const serverIPInfo = flatten(Object.keys(ifaces).map((ifname) => ifaces[ifname]
    .filter(iface => ('IPv4' === iface.family && iface.internal === false))))
    .map(iface => ({
      ip: iface.address,
      gateway: int2ip(ip2int(iface.address) & ip2int(iface.netmask)),
    }));
  return serverIPInfo;
}

