import React, { Component } from 'react';
import { List, Table, Icon, Divider } from 'semantic-ui-react';
import SingleCurrencyPage from '../single_curency_page/SingleCurrencyPage.jsx';
import {
  Route,
  Link,
} from 'react-router-dom';
import Portfolio from '../portfolio_page/Portfolio.jsx';

class PortfolioRight extends Component {
  render() {
    // Make sure prop name is correct
    const { singleTransaction } = this.props;
    const value = singleTransaction.currentValue * singleTransaction.remaining;
    const color = parseFloat( singleTransaction.gain ) > 0 ? 'green' : 'red';
    const arrow = parseFloat( singleTransaction.gain ) > 0 ? 'caret up' : 'caret down';
    return (
      <List.Item onClick={this.props.setSymbol( 'BTC' )}>
        <Link to="/singlecurrency">
          <List.Content>
            <Table fixed unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>{singleTransaction.symbol}</Table.HeaderCell>
                  <Table.HeaderCell style={{ color }}><Icon name={arrow} size="large" />${singleTransaction.gain}</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>QTY: {singleTransaction.remaining} (${value})</Table.Cell>
                  <Table.Cell>${singleTransaction.currentValue}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Divider hidden />
          </List.Content>
        </Link>
      </List.Item>
    );
  }
}
export default PortfolioRight;
