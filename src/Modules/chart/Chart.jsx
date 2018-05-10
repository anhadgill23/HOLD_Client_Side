import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
} from 'react-vis';

class Chart extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      message: 'HURRAH',
      transactions: [],
    };
  }
  componentDidMount() {
    this.init();
  }

  init() {
    const websocket = new WebSocket( 'wss://ws.blockchain.info/inv' );
    websocket.onopen = () => {
      this.setState( {
        message: 'Connected',
      } );
      websocket.send( JSON.stringify( { op: 'unconfirmed_sub' } ) );
    };

    websocket.onerror = ( event ) => {
      this.setState( {
        message: event.data,
      } );
    };
    websocket.onmessage = ( event ) => {
      const { transactions } = this.state;
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
      const x = Math.floor( ( Math.random() * 10 ) + 1 );
      const y = Math.floor( ( Math.random() * 10 ) + 1 );
      const colors = ['red', 'green', 'blue'];
      const randomColor = colors[Math.floor( ( Math.random * 3 ) )];
      const transaction = {
        x, y, color: '#cd3b54', size: value,
      };
      transactions.push( transaction );
      if ( transactions.length > 100 ) {
        transactions.shift();
      }
      this.setState( {
        transactions,
        message: `${transactions.length}, ${transactions[transactions.length - 1].value}`,
      } );
    };
  }

  render() {
    return (
      <XYPlot
        width={600}
        height={600}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries
          className="mark-series-example"
          strokeWidth={2}
          opacity="0.8"
          sizeRange={[5, 15]}
          data={this.state.transactions}
        />
      </XYPlot> );
  }
}

export default Chart;
