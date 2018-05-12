import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Chart from '../transaction_chart/TransactionChart.jsx';

class TransactionChartPage extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <Chart maxSize={250} canRedirect />
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default TransactionChartPage;
