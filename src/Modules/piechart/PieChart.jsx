import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Message, Grid } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';


class PieChart extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    const data = {
      labels: this.props.labels,
      datasets: [{
        data: this.props.remaining,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#1B4F64',
          '#079186',
          '#2EB176'],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#1B4F64',
          '#079186',
          '#2EB176'],
      }],

    };

    return (
      <div className="piechart">
        <Doughnut
          data={data}
          redraw
        />
      </div>
    );
  }
}

export default PieChart;
