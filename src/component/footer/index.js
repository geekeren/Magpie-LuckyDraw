import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.className}>©2018 All rights reversed. Baiyuan @ThoughtWorks <a target={"_blank"} href={'https://github.com/geekeren/Magpie-LuckyDraw'}>Github</a></footer>
    );
  }
}

export default Footer;
