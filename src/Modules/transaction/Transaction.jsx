import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class Transaction extends Component {
  constructor( props ) {
    super( props );
    console.log( this.props );
  }

  componentDidMount() {
  }

  render() {
    return (

      <List.Item>
        <List.Content floated="right">
          <List.Header><span style={{ color: 'green' }}>$92000</span></List.Header>
        </List.Content>
        <List.Content floated="left">
          <Image src="https://www.cryptocompare.com/media/19633/btc.png" size="mini" circular />
        </List.Content>
        <List.Content floated="left">
          <List.Header>Bitcoin</List.Header>
          <span>1000 BTC</span>
        </List.Content>
      </List.Item>
    );
  }
}

export default Transaction;
