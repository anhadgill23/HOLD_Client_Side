import React, { Component } from 'react';
import { NavBar } from './Modules/Navbar'


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <NavBar />
        </header>
        <p className="App-intro">
          To a started, edit <code>src/App.js</code> and save to reload WHAT?  REALLY.
        </p>
      </div>
    );
  }
}

export default App;