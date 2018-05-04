import React, { Component } from 'react';
import Register from './Register.jsx'
import Login from './Login.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="buttons-container" widths="equal">
          <Register />
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
