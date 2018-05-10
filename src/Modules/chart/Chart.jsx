import React, { Component } from 'react';

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
      const id = message.x.hash;
      const utxOutputs = message.x.out;
      let value = 0;
      utxOutputs.forEach( ( output ) => {
        value += output.value;
      } );
      // convert to whole BTC
      value /= 100000000;
      const transaction = { id, value };
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
    return <div>{this.state.message}</div>;
  }
}

export default Chart;
