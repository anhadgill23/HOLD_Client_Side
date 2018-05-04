import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { getChanges } from './websocket_utils';


class Ticker extends Component {
  static getColor( flag ) {
    if ( flag === '1' ) {
      return { color: 'red' };
    } else if ( flag === '2' ) {
      return { color: 'green' };
    } return {};
  }

  constructor( props ) {
    super( props );
    this.state = {
      currency: props.currency,
    };
  }

  componentDidMount() {
    const connectionOptions = {
      'force new connection': true,
      reconnectionAttempts: 'Infinity',
      timeout: 10000,
      transports: ['websocket'],
    };

    const socket = socketIOClient.connect( 'https://streamer.cryptocompare.com/', connectionOptions );
    const subscription = [`5~CCCAGG~${this.state.currency}~USD`, `11~${this.state.currency}`];
    socket.emit( 'SubAdd', { subs: subscription } );
    socket.on( 'm', ( message ) => {
      const messageType = message.substring( 0, message.indexOf( '~' ) );
      if ( messageType === CCC.STATIC.TYPE.CURRENTAGG ) {
        const changes = ( getChanges( message ) );
        for ( const key in changes ) {
          const stateObj = { [key]: changes[key] };
          this.setState( stateObj );
        }
        console.log( this.state );
      } else if ( messageType === CCC.STATIC.TYPE.FULLVOLUME ) {
      }
    } );
  }

  render() {
    let price;
    if ( this.state.Flag === '1' ) {
      price = <span style={{ color: 'red' }}>{this.state.Price}</span>;
    } else if ( this.state.Flag === '2' ) {
      price = <span style={{ color: 'green' }}>{this.state.Price}</span>;
    } else {
      price = <span>{this.state.Price}</span>;
    }
    return (
      <div>
        <span>{this.state.From} ~ {this.state.To} </span><span style={Ticker.getColor( this.state.Flag )}>{this.state.Price}</span>;
        <br />
        <span>Last Market: </span><span>{this.state.LastMarket}</span>
      </div>
    );
  }
}

export default Ticker;
