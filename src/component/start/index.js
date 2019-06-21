import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import {
  Link
} from 'react-router-dom'
import './start.css';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qrData: 'https://magpie.wangbaiyuan.cn',
    }
  }
  componentDidMount() {
    const ws = new WebSocket('ws://localhost:10086/agent');
    ws.onopen = function open() {
      ws.send('something');
    };

    ws.onmessage = function incoming(data) {
      this.setState({
        qrData: data.data
      });
      console.log(data);
    }.bind(this);
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div>在同一局域网内打开手机APP或小程序</div>
        <div>扫描二维码进行远程控制</div>
        <div style={{background: '#fff', padding: 10, width: 200, height: 200, margin: 30}}>
          <QRCode
            value={JSON.stringify(this.state.qrData)}
            size={200}
          />
        </div>
        <Link to="/activity-setting" className="creat_new_activity">创建一个抽奖活动</Link>
      </div>
    );
  }
}

export default Start;
