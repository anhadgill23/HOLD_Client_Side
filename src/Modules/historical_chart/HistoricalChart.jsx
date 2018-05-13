import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import 'chartjs-plugin-annotation';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import { Divider } from 'semantic-ui-react';
import InfoBox from './InfoBox.jsx';


class HistoricalChart extends Component {
  static roundNumber( num, places ) {
    return ( Math.round( num * 100 ) / 100 ).toFixed( places );
  }

  constructor( props ) {
    super( props );
    this.state = {
      data: {},
    };
    this.fetchHistoricalData = this.fetchHistoricalData.bind( this );
    this.setChartData = this.setChartData.bind( this );
    // const parentEventHandler = Chart.Controller.prototype.eventHandler;
    // Chart.Controller.prototype.eventHandler = function () {
    //   const ret = parentEventHandler.apply( this, arguments );
    //   const { x } = arguments[0];
    //   this.clear();
    //   this.draw();
    //   const yScale = this.scales['y-axis-0'];
    //   this.chart.ctx.beginPath();
    //   this.chart.ctx.moveTo( x, yScale.getPixelForValue( yScale.max ) );
    //   this.chart.ctx.strokeStyle = '#ffffff';
    //   this.chart.ctx.lineTo( x, yScale.getPixelForValue( yScale.min ) );
    //   this.chart.ctx.stroke();
    //   return ret;
    // };
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
          backgroundColor: 'rgba(65, 81, 128,0.5)',
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
          pointRadius: 1,
          pointHitRadius: 10,
          data: pointsArray,
        },
      ],
    };

    const options = {
      tooltips: {
        mode: 'index',
        intersect: false,
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
          display: true,
        }],
        xAxes: [{
          display: true,
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
        return pointsArray;
      } ).then( ( pointsArray ) => {
        fetch( 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD' )
          .then( response => response.json() )
          .then( ( price ) => {
            console.log( moment().format() );
            this.setState( {
              currentPrice: price.USD,
              priceChange: HistoricalChart.roundNumber( price.USD - pointsArray[0], 2 ),
              percentChange: HistoricalChart.roundNumber( ( price.USD - pointsArray[0] ) / pointsArray[0] / 0.01, 2 ),
              timeOfPrice: moment(),
            } );
          } );
      } )
      .catch( ( error ) => {
        console.error( error );
      } );
  }

  render() {
    return (
      <div className="historical-chart-container">
        <InfoBox
          currentPrice={this.state.currentPrice}
          priceChange={this.state.priceChange}
          percentChange={this.state.percentChange}
          timeOfPrice={this.state.timeOfPrice}
        />
        <Divider hidden />
        <Line
          data={this.state.data}
          options={this.state.options}
        />
      </div>
    );
  }
}

export default HistoricalChart;
