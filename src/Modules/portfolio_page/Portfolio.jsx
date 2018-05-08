import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Sidebar } from 'semantic-ui-react';
import PieChart from '../piechart/PieChart.jsx'

class Portfolio extends Component {
  constructor ( props ) {
    super ( props )
    this.state = {
      currentUserId: '',
    }
  }
  componentDidMount() {
    fetch("/api/transactions/2", {
            // method: ''
            credentials: 'same-origin'
            })
    .then(function(response) {
            console.log('response is', response)
            return response.json();
          })
  }
  render() {
    const { currentUserId } = this.state
    return (
      <div>
      <Header>
        Hello, user!
      </Header>
      <PieChart />
      </div>
    )
  }
}

export default Portfolio;