import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Sidebar } from 'semantic-ui-react';
import PieChart from '../piechart/PieChart.jsx';

class Portfolio extends Component {
  constructor( props ) {
    super( props );
    console.log( this.props );
    this.state = {
      currentUserName: this.props.userName,
      currentUserId: this.props.userId,
      labels: [],
      remainingData: [],
    };
  }
  componentDidMount() {

    fetch(`/api/${this.props.userId}/transactions`, {
            credentials: 'same-origin'
            })
    .then(function(response) {
            console.log('response is', response)
            return response.json();
          })
    .then((datas) => {
              const labels = this.state.labels;
              const remainingData = this.state.remainingData
              datas.forEach((indiv) => {
                let number = Number(indiv.remaining)
                labels.push(indiv.symbol);
                remainingData.push(number)
              })
              this.setState({
                labels: labels,
                remainingData: remainingData
              }, () => console.log(this.state))
            })
  }
  render() {
    return (
      <div>
      <Header>
        Hello, {this.state.currentUserName}!
      </Header>

        <PieChart labels={this.state.labels} remaining={this.state.remainingData} />

      </div>
    );
  }
}

export default Portfolio;
