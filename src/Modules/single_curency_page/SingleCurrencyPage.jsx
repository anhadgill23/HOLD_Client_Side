
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
        id: 1,
        symbol: 'BTC',
        price: '128.80',
        tradingPair: 'BTC/USD',
        amount: '10.0000',
        transactionCost: '1288.00',
        image_url: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: '93780.60',
        profit: '7181.10',
        buy: true,
      }, {

        id: 2,
        symbol: 'BTC',
        price: '10.80',
        tradingPair: 'BTC/USD',
        amount: '1.0000',
        transactionCost: '10.80',
        image_url: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: '9376.77',
        profit: '86721.94',
        buy: true,
      },
      {
        id: 3,
        symbol: 'BTC',
        price: '10.80',
        tradingPair: 'BTC/USD',
        amount: '5.5000',
        transactionCost: '59.40',
        image_url: 'https://www.cryptocompare.com/media/19633/btc.png',
        currentWorth: '51572.68',
        profit: '86722.69',
        buy: false,
      },
    ];
  }

  componentDidMount() {
    this.test = true;
  }


  render() {
    const transactions =
    this.dummyData.map( transaction =>
      <Transaction key={transaction.id} transaction={transaction} /> );
    return (
          <Grid.Row>
            <Grid.Column width={5}>
              <Ticker currency={this.state.symbol} />
            </Grid.Column>
            <Grid.Column width={11}>
              <div style={{ maxWidth: '30vw', margin: 'auto' }}>
                <List verticalAlign="middle">
                  {transactions}
                </List>
              </div>
              <AddCoinModal />
            </Grid.Column>
          </Grid.Row>

    );
  }
}

export default SingleCurrencyPage;
