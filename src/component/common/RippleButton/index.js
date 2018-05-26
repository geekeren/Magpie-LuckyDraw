import React from 'react';

import { Ripple } from 'react-ripple-effect';

class RippleButton extends React.Component {

  constructor() {
    super();
    this.state = {
      cursorPos: {}
    }
  }

  render () {
    return (
      <button
        className="Ripple-parent"
        onMouseUp={this.handleClick.bind(this)}
        onTouchend={this.handleClick.bind(this)}>
        { this.props.children }
        <Ripple cursorPos={ this.state.cursorPos } />
      </button>
    )
  }

  handleClick(e){
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      // Prevent Component duplicates do ripple effect at the same time
      time: Date.now()
    }
    this.setState({ cursorPos: cursorPos })
  }

}

export default RippleButton;