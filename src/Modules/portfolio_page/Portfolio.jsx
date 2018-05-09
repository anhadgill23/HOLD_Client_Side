import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Sidebar } from 'semantic-ui-react';
import PieChart from '../piechart/PieChart.jsx';
// import Portfolio_left from '../portfolio_left/Portfolio_left'

class Portfolio extends Component {
  constructor ( props ) {
    super ( props )
    console.log(this.props)
    this.state = {
      currentUserId: this.props.userId,
      labels:[],
      remainingData: [],
      currentValuesFromAllCoins: [],
      gainsFromAllCoins: []
    }
  }
  componentDidMount() {
    fetch("/api/2/transactions", {
            credentials: 'same-origin'
            })
    .then(function(response) {
            console.log('response is', response)
            return response.json();
          })
    .then((datas) => {
              const { labels, remainingData, currentValuesFromAllCoins, gainsFromAllCoins } = this.state;

              datas.forEach((indiv) => {
                let number = Number(indiv.remaining);
                let numCurrentValueFromACoin = Number(indiv.currentValue);
                let numGainFromACoin = Number(indiv.gain);

                labels.push(indiv.symbol);
                remainingData.push(number);
                currentValuesFromAllCoins.push(numCurrentValueFromACoin);
                gainsFromAllCoins.push(numGainFromACoin);
              })

              this.setState({
                labels: labels,
                remainingData: remainingData,
                currentValuesFromAllCoins: currentValuesFromAllCoins,
                gainsFromAllCoins: gainsFromAllCoins
              }, () => console.log(this.state))
            })
  }
  render() {
    console.log('rerender')
    const { currentUserId } = this.state.currentUserId
    return (
      <div>
      <Header>
        Hello, user! {currentUserId}
      </Header>
      <PieChart labels={this.state.labels} remaining={this.state.remainingData} />

      </div>
    );
  }
}

export default Portfolio;
