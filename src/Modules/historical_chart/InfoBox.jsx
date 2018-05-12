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
      <Grid columns="equal" divided textAlign="center">
        <Grid.Row style={{ paddingBottom: '0' }}>
          <Grid.Column>
            <Header size="huge" style={{ color: '#7C7C7C' }}>USD${this.props.currentPrice}</Header>
          </Grid.Column>
          <Grid.Column>
            <Header size="huge" style={{ color: '#7C7C7C' }}>USD${this.props.priceChange}</Header>
          </Grid.Column>
          <Grid.Column>
            <Header size="huge" style={{ color: '#7C7C7C' }}>{this.props.percentChange}%</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ paddingTop: '0', paddingBottom: '0' }}>
          <Grid.Column>
            <Header size="tiny" style={{ color: '#7C7C7C' }}>Updated <TimeAgo date={this.props.timeOfPrice} /></Header>
          </Grid.Column>
          <Grid.Column>
            <Header size="tiny" style={{ color: '#7C7C7C' }}>Change Since Last Month (USD)</Header>
          </Grid.Column>
          <Grid.Column>
            <Header size="tiny" style={{ color: '#7C7C7C' }}>Change Since Last Month (%)</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default InfoBox;

