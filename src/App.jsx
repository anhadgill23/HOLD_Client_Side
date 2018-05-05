
import React, { Component } from 'react';
import { List, Grid, Header, Divider } from 'semantic-ui-react';
import logo from './logo.svg';
import Ticker from './Modules/ticker/Ticker.jsx';
import Transaction from './Modules/transaction/Transaction.jsx';
import AddCoinModal from './Modules/add_coin_modal/AddCoinModal.jsx';

class App extends Component {
  render() {
    return (
      <div style={{ padding: '2em' }}>
        <Header size="huge" textAlign="center">Bitcoin BTC</Header>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Ticker currency="BTC" />
            </Grid.Column>
            <Grid.Column width={11}>
              <div style={{ maxWidth: '30vw', margin: 'auto' }}>
                <List celled verticalAlign="middle">
                  <Transaction />
                  <Transaction />
                  <Transaction />
                </List>
              </div>
              <AddCoinModal />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
