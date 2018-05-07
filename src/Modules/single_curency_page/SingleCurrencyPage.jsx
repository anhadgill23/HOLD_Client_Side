
import React, { Component } from 'react';
import { List, Grid, Header, Divider } from 'semantic-ui-react';
import Ticker from '../ticker/Ticker.jsx';
import Transaction from '../transaction/Transaction.jsx';
import AddCoinModal from '../add_coin_modal/AddCoinModal.jsx';

class SingleCurrencyPage extends Component {
  constructor( props ) {
    super( props );
    this.dummyData = [
      {
        symbol: 'BTC',
        price: 128.8,
        tradingPair: 'BTC/USD',
        amount: 10,
        transactionCost: 1288,
        imageUrl: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: 96166,
        profit: 7366.304347826087,
      }, {
        symbol: 'BTC',
        price: 10.8,
        tradingPair: 'BTC/USD',
        amount: 1,
        transactionCost: 10.8,
        imageUrl: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: 9609.29,
        profit: 88874.90740740742,
      },
      {
        symbol: 'BTC',
        price: 128.8,
        tradingPair: 'BTC/USD',
        amount: 10,
        transactionCost: 1288,
        imageUrl: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: 96166,
        profit: 7366.304347826087,
      }, {
        symbol: 'BTC',
        price: 10.8,
        tradingPair: 'BTC/USD',
        amount: -5.5,
        transactionCost: -59.400000000000006,
        imageUrl: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: -52832.945,
        profit: 88844.35185185184,
      },
    ];
  }

  componentDidMount() {
    this.test = true;
  }


  render() {
    const coins = this.dummyData.map( coin => <Transaction coin={coin} /> );
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
                  {coins}
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

export default SingleCurrencyPage;
