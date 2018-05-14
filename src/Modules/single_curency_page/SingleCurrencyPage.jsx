import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { List, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
    this.handleLoading = this.handleLoading.bind( this );
  }

  componentWillMount() {
    if ( localStorage.getItem( 'symbol' ) ) {
      this.setState( {
        symbol: JSON.parse( localStorage.getItem( 'symbol' ) ),
      } );
    }
  }
  componentDidMount() {
    this.fetchTransactions();
  }
  componentWillUpdate( nextProps, nextState ) {
    localStorage.setItem( 'symbol', JSON.stringify( nextState.symbol ) );
  }
  handleLoading() {
    this.props.handleLoading();
  }
  fetchTransactions() {
    this.handleLoading();
    fetch( `/api/${this.state.userId}/transactions/${this.state.symbol}`, {
      credentials: 'same-origin',
    } )
      .then( response => response.json() )
      .then( ( transactions ) => {
        this.setState( { transactions } );
        this.handleLoading();
      } )
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
      ( <Transaction
        key={transaction.id}
        transaction={transaction}
        handleDelete={this.handleDeleteTransaction}
      /> ) );
    return (
      <Grid.Row id="RowOnSingleCurrency">
        <Grid.Column width={5} style={{ height: '100vh' }}>
          <br />
          <Ticker symbol={this.state.symbol} />
          <Link to={`/portfolio/${this.props.userId}`}><Button>Back to Portfolio</Button></Link>
        </Grid.Column>
        <Grid.Column className="ColumnOnSingleCurrency" width={11}>
          <div className="transaction-list">
            <List verticalAlign="middle">
              <AddCoinModal
                symbol={this.state.symbol}
                userId={this.state.userId}
                fetchTransactions={this.fetchTransactions}
              />
              <br />
              {transactions}
            </List>
          </div>
        </Grid.Column>
      </Grid.Row>

    );
  }
}
SingleCurrencyPage.propTypes = {
  handleLoading: PropTypes.func,
  userId: PropTypes.number,
  symbol: PropTypes.string,
};

SingleCurrencyPage.defaultProps = {
  symbol: 'BTC',
  userId: -1,
  handleLoading: () => {},
};

export default SingleCurrencyPage;
