import React, { Component } from 'react';

class LotteryPool extends Component {
  render() {
    return (
      <div className="lottery-pool">
        <div id="input_container">
          <textarea id="nameList" type="text" multiple />
          <button className="button" tabIndex="-1" autoFocus={true} onClick={this.saveNameList}>NEXT</button>
        </div>
      </div>
    );
  }
  saveNameList(){
    console.log("saved");
  }
}

export default LotteryPool;
