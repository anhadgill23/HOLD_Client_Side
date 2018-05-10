import React, { Component } from 'react';
import { List, Table, Icon, Divider, Image } from 'semantic-ui-react';
import SingleCurrencyPage from '../single_curency_page/SingleCurrencyPage.jsx';
import {
  Route,
  Link,
} from 'react-router-dom';
import Portfolio from '../portfolio_page/Portfolio.jsx';

class PortfolioRight extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind( this );
  }
  handleOnClick() {
    this.props.setSymbol( this.props.singleTransaction.symbol );
  }
  render() {
    // Make sure prop name is correct
    const { singleTransaction } = this.props;
    const value = singleTransaction.currentValue * singleTransaction.remaining;
    const color = parseFloat( singleTransaction.gain ) > 0 ? 'green' : 'red';
    const arrow = parseFloat( singleTransaction.gain ) > 0 ? 'caret up' : 'caret down';
    return (
      <List.Item onClick={this.handleOnClick}>
        <Link to="/singlecurrency">
          <List.Content>
            <Table fixed unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell className="TableHeader"><Image src={singleTransaction.image_url} size="mini" circular /></Table.HeaderCell>
                  <Table.HeaderCell className="TableHeader">{singleTransaction.symbol}</Table.HeaderCell>
                  <Table.HeaderCell style={{ color }} className="TableHeader"><Icon name={arrow} size="large" />${singleTransaction.gain}</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell />
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
