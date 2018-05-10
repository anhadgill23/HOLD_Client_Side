import React, { Component } from 'react';
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
          '#0C2E59',
          '#36A2EB',
          '#1B4F64',
          '#079186',
          '#2EB176',
          '#345853',
          '#99CEB5'],
        hoverBackgroundColor: [
          '#0C2E59',
          '#36A2EB',
          '#1B4F64',
          '#079186',
          '#2EB176',
          '#345853',
          '#99CEB5'],
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
