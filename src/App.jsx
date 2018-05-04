import React, { Component } from 'react';
import { NavBar } from './Modules/NavBar.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <p className="App-intro">
          To a started, edit <code>src/App.js</code> and save to reload WHAT?  REALLY.
        </p>
      </div>
    );
  }
}

export default App;