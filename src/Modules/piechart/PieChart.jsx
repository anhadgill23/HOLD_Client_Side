import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Doughnut, Chart } from 'react-chartjs-2';


class PieChart extends Component {
  componentWillMount() {
    Chart.plugins.register( {
      afterDraw( chart ) {
        if ( chart.data.datasets[0].data.length === 0 && chart.config.options.usePlugin ) {
          // No data is present
          const { ctx, width, height } = chart.chart;
          chart.clear();

          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = "16px normal 'Helvetica Nueue'";
          ctx.fillText( 'No data yet, add a transaction!', width / 2, height / 2 );
          ctx.restore();
        }
      },
    } );
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
          '#99CEB5',
          '#97CE53',
          '#CFAE51',
          '#7E88A4',
          '#6C5C79'],
        hoverBackgroundColor: [
          '#0C2E59',
          '#36A2EB',
          '#1B4F64',
          '#079186',
          '#2EB176',
          '#345853',
          '#99CEB5',
          '#97CE53',
          '#CFAE51',
          '#7E88A4',
          '#6C5C79'],
      }],

    };

    return (
      <div className="piechart">
        <Header size="tiny">Portfolio Distribution</Header>
        <Doughnut
          data={data}
          options={{ usePlugin: true }}
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
