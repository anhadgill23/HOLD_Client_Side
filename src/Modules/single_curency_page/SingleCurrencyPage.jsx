
import React, { Component } from 'react';
import { List, Grid } from 'semantic-ui-react';
import Ticker from '../ticker/Ticker.jsx';
import Transaction from '../transaction/Transaction.jsx';
import AddCoinModal from '../add_coin_modal/AddCoinModal.jsx';

class SingleCurrencyPage extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      symbol: 'BTC',
      transactions: [],
    };
  }

  componentDidMount() {
    this.fetchTransactions( 2, 'BTC' );
  }

  fetchTransactions( id, symbol ) {
    fetch( `/api/${id}/transactions/${symbol}`, {
      // method: ''
      credentials: 'same-origin',
    } )
      .then( response => response.json() )
      .then( transactions => this.setState( { transactions } ) )
      .catch( ( error ) => {
        console.error( error );
      } );
  }


  render() {
    const transactions =
    this.state.transactions.map( transaction =>
      <Transaction key={transaction.id} transaction={transaction} /> );
    return (
      <Grid.Row>
        <Grid.Column width={5}>
          <Ticker currency={this.state.symbol} />
        </Grid.Column>
        <Grid.Column width={11}>
          <div className="transaction-list">
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
