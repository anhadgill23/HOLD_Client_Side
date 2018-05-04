
import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class Ticker extends Component {

    constructor()

  componentDidMount() {
    const connectionOptions = {
      'force new connection': true,
      reconnectionAttempts: 'Infinity',
      timeout: 10000,
      transports: ['websocket'],
    };

    const socket = socketIOClient.connect( 'https://streamer.cryptocompare.com/', connectionOptions );
    const subscription = ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD', '11~BTC', '11~ETH'];
    socket.emit( 'SubAdd', { subs: subscription } );
    socket.on( 'm', ( message ) => {
      console.log( message );
      const messageType = message.substring( 0, message.indexOf( '~' ) );
      if ( messageType === CCC.STATIC.TYPE.CURRENTAGG ) {
        console.log( message );
      } else if ( messageType === CCC.STATIC.TYPE.FULLVOLUME ) {
        console.log( message );
      }
    } );
  }
  render() {
    return (
      <div />
    );
  }
}

export default Ticker;
