
import React, { Component } from 'react';
import { List, Grid } from 'semantic-ui-react';
import Ticker from '../ticker/Ticker.jsx';
import Transaction from '../transaction/Transaction.jsx';
import AddCoinModal from '../add_coin_modal/AddCoinModal.jsx';

class SingleCurrencyPage extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      userId: this.props.userId,
      symbol: 'BTC',
      transactions: [],
    };
    this.handleDeleteTransaction = this.handleDeleteTransaction.bind( this );
    this.fetchTransactions = this.fetchTransactions.bind( this );
    // this.handleInsertTransaction = this.handleInsertTransaction.bind( this );
  }

  componentDidMount() {
    this.fetchTransactions();
  }

  fetchTransactions() {
    fetch( `/api/${this.state.userId}/transactions/${this.state.symbol}`, {
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
    this.fetchTransactions();
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
          <AddCoinModal userId={this.state.userId} fetchTransactions={this.fetchTransactions} />
        </Grid.Column>
      </Grid.Row>

    );
  }
}

export default SingleCurrencyPage;
