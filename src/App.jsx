
import React, { Component } from 'react';
import { List, Grid, Segment } from 'semantic-ui-react';
import logo from './logo.svg';
import Transaction from './Modules/transaction/Transaction.jsx';

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
        <Grid>
          <Grid.Row>
            <Grid.Column width={5} />
            <Grid.Column width={11}>
              <div style={{ maxWidth: '30vw', margin: 'auto' }}>
                <List celled verticalAlign="middle">
                  <Transaction />
                  <Transaction />
                </List>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
