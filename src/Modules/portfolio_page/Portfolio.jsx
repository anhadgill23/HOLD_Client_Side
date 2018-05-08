import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Sidebar } from 'semantic-ui-react';
import PieChart from '../piechart/PieChart.jsx'

class Portfolio extends Component {
  componentDidMount() {
    fetch("/api/13", {
            // method: 'POST'

            })
    .then(function(response) {
            console.log('response is', response)
            return response.json();
          })
  }
  render() {
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