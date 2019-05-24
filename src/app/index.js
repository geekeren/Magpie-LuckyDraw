import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router'
import Modal from 'react-modal';
import Background from '../component/background';
import Header from '../component/header';
import Footer from '../component/footer';
import './App.css';
import Start from "../component/start";
import LotteryPool from "../component/lottery-pool";
import LotteryDrawing from "../component/lottery-drawing";
import LotterySetting from "../component/lottery-setting";
import ActivitySetting from "../component/activity-setting";
import Result from "../component/result";
import Provider from "react-redux/es/components/Provider";
import { BrowserRouter } from "react-router-dom";
import getStore from "../redux/store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmRecovered: false,
    }
  }

  componentDidMount() {
    const serializedState = localStorage.getItem('state');
    if (serializedState && window.confirm('是否恢复上次数据？')) {
      this.store = getStore(true)
    } else {
      this.store = getStore(false)
      localStorage.removeItem('state');
    }
    this.setState({
      confirmRecovered: true,
    })
    this.store.subscribe(() => {
      window.onbeforeunload = (e) => {
        const state = this.store.getState();
        this.saveState(state);
      };
    })
  }

  saveState = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  };

  render() {
    return (
      <BrowserRouter>
        <Background
          showBackground={true}
        >
          {!this.state.confirmRecovered ?
            undefined
            :
            <Provider store={this.store}>
              <div>
                <Header className={'header'}/>
                <article className={'main'}>
                  <Switch>
                    <Route exact path='/' component={Start}/>
                    <Route path='/result' component={Result}/>
                    <Route path='/lottery-drawing' component={LotteryDrawing}/>
                    <Route path='/lottery-pool' component={LotteryPool}/>
                    <Route path='/lottery-setting' component={LotterySetting}/>
                    <Route path='/activity-setting' component={ActivitySetting}/>
                    <Redirect from="/*" to="/"/>
                  </Switch>
                </article>
                <Footer className={'footer'}/>
              </div>
            </Provider>
          }
        </Background>
      </BrowserRouter>);
  }
}

export default App;
