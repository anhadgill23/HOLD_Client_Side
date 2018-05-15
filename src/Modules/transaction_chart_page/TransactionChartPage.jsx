import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Segment, Sidebar, Menu } from 'semantic-ui-react';
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
                <Segment>
                  <Header>
                    Real time BTC transactions.  Circle size is proportional to transaction size
                  </Header>
                </Segment>
                <Chart maxSize={250} canRedirect color="yellow" />
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

TransactionChartPage.propTypes = {
  visible: PropTypes.bool,
};

TransactionChartPage.defaultProps = {
  visible: false,
};
