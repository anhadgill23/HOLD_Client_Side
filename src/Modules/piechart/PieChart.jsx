import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';


class PieChart extends Component {
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
        <Header size="tiny">Portfolio Distribution</Header>
        <Doughnut
          data={data}
        />
      </div>
    );
  }
}
PieChart.propTypes = {
  labels: PropTypes.arrayOf( PropTypes.string.isRequired ),
  remaining: PropTypes.arrayOf( PropTypes.number.isRequired ),
};

PieChart.defaultProps = {
  labels: [],
  remaining: [],
};

export default PieChart;
