import React, { Component } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import Chart from '../transaction_chart/TransactionChart.jsx';

class TransactionChartPage extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Header>Real time BTC transactions.  Circle size is proportional to transaction size</Header>
          </Segment>
          <Chart maxSize={250} canRedirect color="yellow" />
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default TransactionChartPage;
