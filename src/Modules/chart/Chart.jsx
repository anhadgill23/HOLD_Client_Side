import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Bubble } from 'react-chartjs-2';

class Chart extends Component {
  static reloadData( data ) {
    return {
      labels: ['January'],
      datasets: [
        {
          scaleOverride: true,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(65, 81, 128,0.4)',
          borderColor: 'rgb(65, 81, 128 ,1)',
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
          data,
        },
      ],
    };
  }

  constructor( props ) {
    super( props );
    this.webSocket = new WebSocket( 'wss://ws.blockchain.info/inv' );
    this.state = {
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              max: 1,
              min: 0,
              stepSize: 0.01,
            },
          }],
          xAxes: [{
            display: false,
            ticks: {
              max: 1,
              min: 0,
              stepSize: 0.01,
            },
          }],
        },
      },
      data: Chart.reloadData( [{ x: 0.5, y: 0.5, r: 2 }] ),
    };
  }
  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.webSocket.close();
  }


  init() {
    this.webSocket.onopen = () => {
      this.setState( {
        message: 'Connected',
      } );
      this.webSocket.send( JSON.stringify( { op: 'unconfirmed_sub' } ) );
    };


    this.webSocket.onerror = ( event ) => {
      console.log( event.data );
    };
    this.webSocket.onmessage = ( event ) => {
      let data = this.state.data.datasets[0].data.slice( 0 );
      const message = JSON.parse( event.data );
      const _id = message.x.hash;
      const utxOutputs = message.x.out;
      let value = 0;
      utxOutputs.forEach( ( output ) => {
        value += output.value;
      } );
      // convert to whole BTC
      value /= 100000000;
      // { x: 1, y: 10, size: 30 }
      const x = Math.random();
      const y = Math.random();
      const transaction = {
        x, y, r: value,
      };
      data.push( transaction );
      if ( data.length > 400 ) {
        data = [];
      }
      this.setState( {
        data: Chart.reloadData( data ),
      } );
    };
  }

  render() {
    return (
      <div>
        <Header size="tiny">Realtime BTC transactions</Header>
        <Bubble data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default Chart;
