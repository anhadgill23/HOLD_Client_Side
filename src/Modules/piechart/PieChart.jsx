import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Message, Grid } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';


class PieChart extends Component {
  constructor ( props ) {
    super ( props )

  }

  render() {
    console.log(this.props)
    console.log(this.props.labels, this.props.remaining)
    const data = {
        labels: this.props.labels,
        datasets: [{
          data: this.props.remaining,
          backgroundColor: [
          '#FF6384',
          '#36A2EB'],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB']
        }]

      };

    return (
      <div className="piechart">
        <Doughnut
          data={data}
          redraw
        />
      </div>
    )
  }
}

export default PieChart;