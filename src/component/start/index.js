import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class Start extends Component {
  render() {
    return (
      <div><Link to="/activity-setting">Create new Drawing</Link></div>
    );
  }
}

export default Start;
