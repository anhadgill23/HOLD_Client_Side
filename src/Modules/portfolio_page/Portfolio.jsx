import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, List, Header, Grid, Divider, Transition, Label } from 'semantic-ui-react';
import PieChart from '../piechart/PieChart.jsx';
import News from '../news/News.jsx';
import PortfolioLeft from '../portfolio_left/PortfolioLeft.jsx';
import PortfolioRight from '../portfolio_right/PortfolioRight.jsx';
import AddCoinModal from '../add_coin_modal/AddCoinModal.jsx';
import TransactionChart from '../transaction_chart/TransactionChart.jsx';

class Portfolio extends Component {
  constructor( props ) {
    super( props );
    this.fetchTransactions = this.fetchTransactions.bind( this );
    this.state = {
      visible: true,
      currentUserName: this.props.userName,
      currentUserId: this.props.userId,
      labels: [],
      remainingData: [],
      currentValuesFromAllCoins: [],
      gainsFromAllCoins: [],
      transactions: [],
    };
    console.log( this.props );
    this.setSymbol = this.setSymbol.bind( this );
    this.handleLoading = this.handleLoading.bind( this );
  }
  componentDidMount() {
    this.fetchTransactions();
    setInterval( () => {
      console.log( 'MOUNNN' );
      this.setState( { visible: !this.state.visible } );
    }, 1500 );
  }
  setSymbol( symbol ) {
    this.props.setSymbol( symbol );
  }
  handleLoading() {
    this.props.handleLoading();
  }
  fetchTransactions() {
    this.handleLoading();
    fetch( `/api/${this.state.currentUserId}/transactions`, {
      credentials: 'same-origin',
    } )
      .then( response => response.json() )
      .then( ( transactions ) => {
        this.handleLoading();
        const currentValuesFromAllCoins = [];
        const gainsFromAllCoins = [];
        const labels = [];
        const remainingData = [];
        transactions.forEach( ( indiv ) => {
          const number = Number( indiv.remaining );
          const numCurrentValueFromACoin = Number( indiv.currentValue );
          const numGainFromACoin = Number( indiv.gain );
          labels.push( indiv.symbol );
          remainingData.push( number );
          currentValuesFromAllCoins.push( numCurrentValueFromACoin );
          gainsFromAllCoins.push( numGainFromACoin );
        } );
        this.setState( {
          labels,
          remainingData,
          currentValuesFromAllCoins,
          gainsFromAllCoins,
          transactions,
        } );
      } );
  }


  render() {
    const transactions =
    this.state.transactions.map( transaction =>
      ( <PortfolioRight
        key={this.state.transactions.indexOf( transaction )}
        singleTransaction={transaction}
        userName={this.statecurrentUserName}
        userId={this.state.currentUserId}
        setSymbol={this.setSymbol}
      /> ) );
    return (


      <Grid.Row id="RowOnPortfolio">
        <Grid.Column width={5}>
          <PortfolioLeft
            currentValuesFromAllCoins={this.state.currentValuesFromAllCoins}
            gainsFromAllCoins={this.state.gainsFromAllCoins}
            currentUserName={this.state.currentUserName}
          />
          <PieChart
            labels={this.state.labels}
            remaining={this.state.remainingData}
          />
          <Divider />
          <Link to="/transactions/btc/chart">
            <Transition animation="pulse" duration="1000" visible={this.state.visible}>
              <Label basic color="blue" pointing="below" size="mini">Click me!</Label>
            </Transition>
            <TransactionChart loading={this.props.loading} maxSize={60} color="blue" />
          </Link>
          <Divider hidden />
        </Grid.Column>
        <Grid.Column className="RightColumn" width={11}>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="overlay"
              width="wide"
              direction="right"
              visible={this.props.visible}
              style={{ backgroundColor: '#7C8D97', padding: '10px' }}
              icon="labeled"
              vertical
              inverted
            >
              <Header>Crypto Coins News</Header>
              <p>Source: www.ccn.com</p>
              <News />
            </Sidebar>
            <Sidebar.Pusher>
              <div className="transaction-list-portfolio">
                <AddCoinModal
                  userId={this.state.currentUserId}
                  fetchTransactions={this.fetchTransactions}
                />
                <List>
                  {transactions}
                </List>
              </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Portfolio;
