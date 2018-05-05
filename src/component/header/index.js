import React, { Component } from 'react';
import logo from './albird.svg'

class Header extends Component {
  render() {
    return (
     <header className={this.props.className}>
       <img width={24} src={logo}/>
       <span>ThoughtWorks武汉年会</span>
     </header>
    );
  }
}

export default Header;
