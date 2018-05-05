import React, { Component } from 'react';
import Background from '../component/background';
import Header from '../component/header';
import Footer from '../component/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Background />
        <article className={'main'}>
          <Header className={'header'} />
          <Footer className={'footer'} />
        </article>
      </div>

    );
  }
}

export default App;
