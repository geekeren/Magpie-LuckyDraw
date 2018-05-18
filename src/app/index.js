import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router'
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

class App extends Component {
  render() {
    return (
      <Background>
        <Header className={'header'}/>
        <article className={'main'}>
          <Switch>
            <Route exact path='/' component={Start}/>
            <Route path='/result' component={Result}/>
            <Route path='/lottery-pool' component={LotteryPool}/>
            <Route path='/lottery-drawing' component={LotteryDrawing}/>
            <Route path='/lottery-setting' component={LotterySetting}/>
            <Route path='/activity-setting' component={ActivitySetting}/>
            <Redirect from="/*" to="/" />
          </Switch>
        </article>
        <Footer className={'footer'}/>
      </Background>
    );
  }
}

export default App;
