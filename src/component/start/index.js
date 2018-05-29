import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class Start extends Component {
  render() {
    return (
      <div><Link to="/activity-setting">创建一个抽奖活动</Link></div>
    );
  }
}

export default Start;
