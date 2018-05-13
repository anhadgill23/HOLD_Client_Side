import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import { Header, Grid } from 'semantic-ui-react';

class InfoBox extends Component {
  static roundNumber( num, places ) {
    return ( Math.round( num * 100 ) / 100 ).toFixed( places );
  }

  render() {
    return (
      <div>
        <Header size="huge" style={{ color: '#7C7C7C' }}>30 Day Bitcoin Price Chart</Header>
        <Grid stackable columns="equal" divided textAlign="center">
          <Grid.Row style={{ paddingBottom: '0' }}>
            <Grid.Column>
              <Header size="huge" style={{ marginBottom: 0, color: '#7C7C7C' }}>USD${this.props.currentPrice}</Header>
              <Header size="tiny" style={{ marginTop: 0, color: '#7C7C7C' }}>Updated <TimeAgo date={this.props.timeOfPrice} /></Header>
            </Grid.Column>
            <Grid.Column>
              <Header size="huge" style={{ marginBottom: 0, color: '#7C7C7C' }}>USD${this.props.priceChange}</Header>
              <Header size="tiny" style={{ marginTop: 0, color: '#7C7C7C' }}>Change Since Last Month (USD)</Header>
            </Grid.Column>
            <Grid.Column>
              <Header size="huge" style={{ marginBottom: 0, color: '#7C7C7C' }}>{this.props.percentChange}%</Header>
              <Header size="tiny" style={{ marginTop: 0, color: '#7C7C7C' }}>Change Since Last Month (%)</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default InfoBox;

