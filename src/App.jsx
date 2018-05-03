import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'semantic-ui-react'

class App extends Component {

  getTestData() {
    console.log("GET")
    return fetch('http://localhost:8080/test')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
           <Button onClick={this.getTestData}>Click Here!</Button>
      </div>

    );
  }
}

export default App;
