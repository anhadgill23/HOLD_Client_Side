
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
    this.handleDeleteTransaction = this.handleDeleteTransaction.bind( this );
  }

  componentDidMount() {
    this.fetchTransactions( 2, 'BTC' );
  }

  fetchTransactions( userId, symbol ) {
    fetch( `/api/${userId}/transactions/${symbol}`, {
      // method: ''
      credentials: 'same-origin',
    } )
      .then( response => response.json() )
      .then( transactions => this.setState( { transactions } ) )
      .catch( ( error ) => {
        console.error( error );
      } );
  }

  handleDeleteTransaction( transactionId ) {
    console.log( transactionId );
    fetch( `/api/transactions/${transactionId}`, {
      method: 'POST',
      body: JSON.stringify( this.state ),
      headers: new Headers( {
        'Content-Type': 'application/json',
      } ),
      credentials: 'same-origin',
    } )
      .then( response => response.json() );
    this.fetchTransactions( 2, 'BTC' );
  }


  render() {
    const transactions =
    this.state.transactions.map( transaction =>
      <Transaction key={transaction.id} transaction={transaction} handleDelete={this.handleDeleteTransaction} /> );
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
