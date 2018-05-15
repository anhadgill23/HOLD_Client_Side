import React, { Component } from 'react';
import { Grid, Sidebar, Menu, Header } from 'semantic-ui-react';
import Chart from '../transaction_chart/TransactionChart.jsx';
import News from '../news/News.jsx';

class TransactionChartPage extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="overlay"
              width="wide"
              direction="right"
              visible={this.props.visible}
              style={{ backgroundColor: '#7C8D97', padding: '10px' }}
              icon="labeled"
              vertical
              inverted
            >
              <Header>Crypto Coins News</Header>
              <p>Source: www.ccn.com</p>
              <News />
            </Sidebar>
            <Sidebar.Pusher>
            <div>
              <Chart maxSize={250} canRedirect color="yellow" />
            </div>
           </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default TransactionChartPage;
