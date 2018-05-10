
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
      symbol: this.props.symbol,
      transactions: [],
    };
    this.handleDeleteTransaction = this.handleDeleteTransaction.bind( this );
    this.fetchTransactions = this.fetchTransactions.bind( this );
  }

  componentDidMount() {
    this.fetchTransactions();
    console.log( 'singlecurrency page', this.props.userId );
    console.log( 'singlecurrency page', this.props.symbol );
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
        <Grid.Column width={5} style={{height: '100vh'}}>
          <Ticker symbol={this.state.symbol} />
        </Grid.Column>
        <Grid.Column color="grey" width={11} style={{height: '100vh'}}>
          <div className="transaction-list">
            <List verticalAlign="middle">
              {transactions}
            </List>
          </div>
          <AddCoinModal symbol={this.state.symbol} userId={this.state.userId} fetchTransactions={this.fetchTransactions} />
        </Grid.Column>
      </Grid.Row>

    );
  }
}

export default SingleCurrencyPage;
