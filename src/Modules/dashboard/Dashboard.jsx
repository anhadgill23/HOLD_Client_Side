import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Header, Transition, Icon } from 'semantic-ui-react';
import Ticker from '../ticker/Ticker.jsx';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Divider hidden />
        <Transition animation="pulse" duration="1000" visible={this.props.visible}>
          <Icon color="black" size="huge" name="arrow circle outline up" />
        </Transition>
        <Header style={{ color: 'black' }}>Welcome, it appears you havent recorded any transactions yet!  Give it a try!</Header>
        <Divider />
        <Header style={{ color: 'black' }}>Real time BTC transactions</Header>
        <Ticker />
      </div>
    );
  }
}

export default Dashboard;
