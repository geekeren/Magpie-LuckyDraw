import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import './start.css';

class Start extends Component {
  render() {
    return (
      <div><Link to="/activity-setting" className="creat_new_activity">创建一个抽奖活动</Link></div>
    );
  }
}

export default Start;
