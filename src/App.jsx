import React, { Component } from 'react';
import { NavBar } from './Modules/NavBar.jsx';

// import logo from './logo.svg';
import Ticker from './Ticker.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NavBar />
        <p className="App-intro">
          To a started, edit <code>src/App.js</code> and save to reload WHAT?  REALLY.
        </p>
      </div>
    );
  }
}

export default App;