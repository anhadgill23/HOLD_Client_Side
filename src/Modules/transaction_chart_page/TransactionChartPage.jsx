import React, { Component } from 'react';
import Chart from '../chart/Chart.jsx';
import { Grid, GridRow } from 'semantic-ui-react';


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
