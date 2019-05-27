import React, { Component } from 'react';
import './lottery-setting.css'
import LotteryEdit from "../lottery-edit/index";

class LotterySetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    }
  }

  render() {
    return (
      <div className="lottery-setting">
        <header>奖项设置</header>
        <section className="lottery-edit">
          <LotteryEdit/>
        </section>
        <section className={'next-btn'}>
          <button onClick={this.next}>NEXT</button>
        </section>
      </div>
    );
  }

  next = () => {
    this.props.history.push("/lottery-drawing")
  }
}

export default LotterySetting;
