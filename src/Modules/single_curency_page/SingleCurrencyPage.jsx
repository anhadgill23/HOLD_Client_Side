
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
        price: '128.80',
        tradingPair: 'BTC/USD',
        amount: '10.0000',
        transactionCost: '1288.00',
        imageUrl: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: '93345.30',
        profit: '7147.31',
      }, {
        symbol: 'BTC',
        price: '10.80',
        tradingPair: 'BTC/USD',
        amount: '1.0000',
        transactionCost: '10.80',
        imageUrl: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: '9338.44',
        profit: '86367.04',
      },
      {
        symbol: 'BTC',
        price: '10.80',
        tradingPair: 'BTC/USD',
        amount: '-5.5000',
        transactionCost: '-59.40',
        imageUrl: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: '-51377.75',
        profit: '86394.53',
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
