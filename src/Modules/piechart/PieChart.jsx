import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Message, Grid } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';


const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};


class PieChart extends Component {
  constructor ( props ) {
    super ( props )
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <div className="piechart">
        <Doughnut
          data={this.state.data}
        />
      </div>
    )
  }
}

export default PieChart;