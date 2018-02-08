import React, { Component } from 'react';
import logo from './logo.svg';

import Report from 'react-data-report';
import example from './example.json';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 className="App-intro">Example of 'react-data-report' Component.</h1>
        <br />
        <Report data={example} opening={(<h1>This is an opening content.</h1>)} closing={(<h1>This is a closing content.</h1>)}/>
      </div>
    );
  }
}

export default App;
