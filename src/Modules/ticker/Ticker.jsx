import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.CURRENTAGG = '5';
    this.socket = socketIOClient.connect( 'https://streamer.cryptocompare.com/', {
      'force new connection': true,
      reconnectionAttempts: 'Infinity',
      timeout: 10000,
      transports: ['websocket'],
    } );
    this.state = {
      symbol: props.symbol,
    };
  }

  componentDidMount() {
    const subscription = [`5~CCCAGG~${this.state.symbol}~USD`, `11~${this.state.symbol}`];
    this.socket.emit( 'SubAdd', { subs: subscription } );
    this.socket.on( 'm', ( message ) => {
      const messageType = message.substring( 0, message.indexOf( '~' ) );
      if ( messageType === this.CURRENTAGG ) {
        const changes = ( getChanges( message ) );

        Object.keys( changes ).forEach( ( key ) => {
          const stateObj = { [key]: changes[key] };
          this.setState( stateObj );
        } );
      }
    } );
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  render() {
    return (
      <Table unstackable>
        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign="right">
              <span>{this.state.From} ~ {this.state.To} </span>
            </Table.Cell>
            <Table.Cell>
              <span style={Ticker.getColor( this.state.Flag )}>{this.state.Price}</span>
            </Table.Cell>
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

Ticker.propTypes = {
  symbol: PropTypes.string,
};

Ticker.defaultProps = {
  symbol: 'BTC',
};

