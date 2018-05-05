
import React, { Component } from 'react';
import logo from './Modules/logo.svg';
import NavBar from './Modules/NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To a started, edit <code>src/App.js</code> and save to reload WHAT?  REALLY.
        </p>
      </div>
    );
  }
}

export default App;
