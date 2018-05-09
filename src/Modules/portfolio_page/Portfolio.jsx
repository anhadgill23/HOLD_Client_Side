import React, { Component } from 'react';
import { List, Header, Grid } from 'semantic-ui-react';
import PieChart from '../piechart/PieChart.jsx';
import PortfolioMain from '../portfolio_right/Portfolio_right.jsx';
import AddCoinModal from '../add_coin_modal/AddCoinModal.jsx';

class Portfolio extends Component {
  constructor( props ) {
    super( props );
    this.fetchTransactions = this.fetchTransactions.bind( this );
    console.log( this.props );
    this.state = {
      currentUserName: this.props.userName,
      currentUserId: this.props.userId,
      labels: [],
      remainingData: [],
      transactions: [],
    };
  }
  componentDidMount() {
    this.fetchTransactions();
  }

  fetchTransactions() {
    fetch( `/api/${this.state.currentUserId}/transactions`, {
      credentials: 'same-origin',
    } )
      .then( ( response ) => {
        console.log( 'response is', response );
        return response.json();
      } )
      .then( ( transactions ) => {
        const labels = [];
        const remainingData = [];
        transactions.forEach( ( indiv ) => {
          const number = Number( indiv.remaining );
          labels.push( indiv.symbol );
          remainingData.push( number );
        } );
        this.setState( {
          labels,
          remainingData,
          transactions,
        }, () => console.log( this.state ) );
      } );
  }

  render() {
    const transactions =
    this.state.transactions.map( transaction =>
      <PortfolioMain key={transaction.id} singleTransaction={transaction} userName={this.statecurrentUserName} userId={this.state.currentUserId} /> );
    return (

      <Grid.Row>
        <Grid.Column width={5}>
          <PieChart labels={this.state.labels} remaining={this.state.remainingData} />
        </Grid.Column>
        <Grid.Column width={11}>
          <Header>
        Hello, {this.state.currentUserName}!
          </Header>
          <div className="transaction-list">
            <List>
              {transactions}
            </List>
          </div>
          <AddCoinModal userId={this.state.currentUserId} fetchTransactions={this.fetchTransactions} />
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Portfolio;
