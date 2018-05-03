import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To a started, edit <code>src/App.js</code> and save to reload WHAT?  REALLY.
        </p>
        <Button>Click Here!</Button>
      </div>
    );
  }
}

export default App;
