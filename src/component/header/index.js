import React, { Component } from 'react';
import logo from './albird.svg'
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
     <header className={this.props.className}>
       <img width={24}  height={24} src={logo}/>
       <span>{this.props.activityName}</span>
     </header>
    );
  }
}
const mapStateToProps = state => ({
  activityName: state.dataReducer.activitySetting.name,
});

export default connect(mapStateToProps)(Header);