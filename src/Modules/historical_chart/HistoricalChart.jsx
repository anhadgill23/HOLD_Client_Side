import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

class HistoricalChart extends Component {
  constructor( props ) {
    super( props );
    console.log( 'HISTCHART' );
    this.state = {
      historicalData: 'Funk',
    };
    this.fetchHistoricalData = this.fetchHistoricalData.bind( this );
    this.setChartData = this.setChartData.bind( this );
  }


  componentDidMount() {
    this.fetchHistoricalData();
  }


  setChartData( pointsArray, timeStampArray ) {
    const data = {
      labels: timeStampArray,
      fillOpacity: 0.3,
      datasets: [
        {
          label: 'BTC price',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(65, 81, 128,0.2)',
          borderColor: 'rgba(65, 81, 128,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,
          data: pointsArray,
        },
      ],
    };

    const options = {
      tooltips: {
        displayColors: false,
        // callbacks: {
        //   title: ( items, data ) => data.datasets[items[0].datasetIndex].data[items[0].index].hash,
        //   label: ( item, data ) => `฿ ${data.datasets[item.datasetIndex].data[item.index].value}`,
        // },
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          display: false,
        }],
        xAxes: [{
          display: false,
        }],
      },
    };
    this.setState( {
      data,
      options,
    } );
  }

  fetchHistoricalData() {
    console.log( 'FETCHING HISTORICAL DATA' );
    fetch( 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=29' )
      .then( response => response.json() )
      .then( ( historicalData ) => {
        const pointsArray = historicalData.Data.map( data => data.close );
        const timeStampArray = historicalData.Data.map( data => moment.unix( data.time ).format( 'MM/DD/YYYY' ) );
        this.setChartData( pointsArray, timeStampArray );
      } )
      .catch( ( error ) => {
        console.error( error );
      } );
  }

  render() {
    return (
      <div style={{ maxWidth: '50vw', margin: '0 auto' }}>
        <Line data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default HistoricalChart;
