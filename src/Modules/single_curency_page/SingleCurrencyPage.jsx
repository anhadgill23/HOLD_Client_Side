
import React, { Component } from 'react';
import { List, Grid, Header, Divider } from 'semantic-ui-react';
import Ticker from '../ticker/Ticker.jsx';
import Transaction from '../transaction/Transaction.jsx';
import AddCoinModal from '../add_coin_modal/AddCoinModal.jsx';

class SingleCurrencyPage extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      symbol: 'BTC',
    };
    this.dummyData = [
      {
        symbol: 'BTC',
        price: '128.80',
        tradingPair: 'BTC/USD',
        amount: '10.0000',
        transactionCost: '1288.00',
        imageUrl: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: '93243.50',
        profit: '7139.40',
        buy: true,
      }, {
        symbol: 'BTC',
        price: '10.80',
        tradingPair: 'BTC/USD',
        amount: '1.0000',
        transactionCost: '10.80',
        imageUrl: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: '9338.44',
        profit: '86367.04',
        buy: true,
      },
      {
        symbol: 'BTC',
        price: '10.80',
        tradingPair: 'BTC/USD',
        amount: '5.5000',
        transactionCost: '59.40',
        imageUrl: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: '51377.75',
        profit: '86394.53',
        buy: false,
      },
    ];
  }

  componentDidMount() {
    this.test = true;
  }


  render() {
    const transactions = this.dummyData.map( transaction => <Transaction transaction={transaction} /> );
    return (
      <div style={{ padding: '2em' }}>
        <Header size="huge" textAlign="center">Bitcoin BTC</Header>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Ticker currency={this.state.symbol} />
            </Grid.Column>
            <Grid.Column width={11}>
              <div style={{ maxWidth: '30vw', margin: 'auto' }}>
                <List celled verticalAlign="middle">
                  {transactions}
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
