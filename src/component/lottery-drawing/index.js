import React, { Component } from 'react';

class LotteryDrawing extends Component {
  render() {
    return (
      <div className="lottery-drawing">
        lottery is drawing
      </div>
    );
  }
  saveNameList(){
    console.log("saved");
  }
}

export default LotteryDrawing;
