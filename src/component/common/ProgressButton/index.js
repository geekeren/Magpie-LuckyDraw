import React, { Component } from 'react';

class ProgressButton extends Component {
  render() {
    return (
      <button onClick={this.next}>NEXT</button>
    );
  }
  next() {
    this.props.history.push("/lottery-setting")
  }
}

export default ProgressButton;
