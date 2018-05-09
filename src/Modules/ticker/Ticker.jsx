import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import socketIOClient from 'socket.io-client';
import { getChanges } from './websocket_utils';

class Ticker extends Component {
  static getColor( flag ) {
    if ( flag === '1' ) {
      return { color: 'red' };
    } else if ( flag === '2' ) {
      return { color: 'green' };
    } return { color: 'orange' };
  }

  constructor( props ) {
    super( props );
    this.socket = socketIOClient.connect( 'https://streamer.cryptocompare.com/', {
      'force new connection': true,
      reconnectionAttempts: 'Infinity',
      timeout: 10000,
      transports: ['websocket'],
    } );
    this.state = {
      currency: props.currency,
    };
  }

  componentDidMount() {
    const subscription = [`5~CCCAGG~${this.state.currency}~USD`, `11~${this.state.currency}`];
    this.socket.emit( 'SubAdd', { subs: subscription } );
    this.socket.on( 'm', ( message ) => {
      const messageType = message.substring( 0, message.indexOf( '~' ) );
      if ( messageType === CCC.STATIC.TYPE.CURRENTAGG ) {
        const changes = ( getChanges( message ) );
        for ( const key in changes ) {
          const stateObj = { [key]: changes[key] };
          this.setState( stateObj );
        }
      } else if ( messageType === CCC.STATIC.TYPE.FULLVOLUME ) {
        const volData = CCC.FULLVOLUME.unpack( message );
        // onsole.log( volData );
      }
    } );
  }

  componentWillUnmount() {
    this.socket.disconnect();
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
      <Table unstackable>
        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign="right"><span>{this.state.From} ~ {this.state.To} </span></Table.Cell>
            <Table.Cell><span style={Ticker.getColor( this.state.Flag )}>{this.state.Price}</span></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign="right"><span>Last Market: </span></Table.Cell>
            <Table.Cell><span>{this.state.LastMarket}</span></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign="right"><span>Open Day: </span></Table.Cell>
            <Table.Cell><span>{this.state.Open24Hour}</span></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign="right"><span>High Day: </span></Table.Cell>
            <Table.Cell><span>{this.state.High24Hour}</span></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign="right"><span>Low Day: </span></Table.Cell>
            <Table.Cell><span>{this.state.Low24Hour}</span></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default Ticker;
