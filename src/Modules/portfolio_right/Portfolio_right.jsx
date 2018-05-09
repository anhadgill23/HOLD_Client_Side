import React, { Component } from 'react';
import { List, Table, Icon } from 'semantic-ui-react';
import SingleCurrencyPage from '../single_curency_page/SingleCurrencyPage.jsx';
import {
  Route,
  Link,
} from 'react-router-dom';
// import PARENT PAGE WITH PROPS from '---';

class PortfolioRight extends Component {
  render() {
    // Make sure prop name is correct
    const { transaction } = this.props;
    const value = transaction.currentValue * transaction.remaining;
    const color = parseFloat( transaction.gain ) > 0 ? 'green' : 'red';
    const arrow = parseFloat( transaction.gain ) > 0 ? 'caret up' : 'caret down';
    return (
      <List.Item>
        <Link to="/singletransaction">
          <List.Content>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>{transaction.symbol}</Table.HeaderCell>
                  <Table.HeaderCell style={{ color }}><Icon name={arrow} size="large" />${transaction.gain}</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>QTY: {transaction.remaining} (${value})</Table.Cell>
                  <Table.Cell>${transaction.currentValue}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </List.Content>
        </Link>
        {/* CONFIRM ROUTETO SINGLE CURRENCY PAGE WORKS...LINE 37 */}
        <Route path="/login" render={props => <SingleCurrencyPage {...props} symbol={transaction.symbol} />} />
      </List.Item>
    );
  }
}
export default PortfolioRight;
