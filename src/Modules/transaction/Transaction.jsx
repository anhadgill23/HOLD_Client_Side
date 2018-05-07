import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Image, Table } from 'semantic-ui-react';


class Transaction extends Component {
  render() {
    const transactionType = this.props.transaction.buy ? 'Cost' : 'Proceeds';
    const buyOrSell = this.props.transaction.buy ? `${this.props.transaction.symbol} Buy Price` : `${this.props.transaction.symbol} Sell Price`;
    const amountBoughtOrSoldHeader = this.props.transaction.buy ? 'Bought' : 'Sold';
    return (

      <List.Item>

        <List.Content floated="right">

          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell><Image src={this.props.transaction.image_url} size="mini" circular /></Table.HeaderCell>
                <Table.HeaderCell>{buyOrSell}</Table.HeaderCell>
                <Table.HeaderCell>Trading Pair</Table.HeaderCell>
                <Table.HeaderCell>Amount {amountBoughtOrSoldHeader}</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell />
                <Table.Cell>{this.props.transaction.price}</Table.Cell>
                <Table.Cell>{this.props.transaction.tradingPair}</Table.Cell>
                <Table.Cell>{this.props.transaction.amount}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell />
                <Table.Cell>{transactionType}</Table.Cell>
                <Table.Cell>Worth</Table.Cell>
                <Table.Cell>% Change</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell />
                <Table.Cell>{this.props.transaction.transactionCost}</Table.Cell>
                <Table.Cell>{this.props.transaction.currentWorth}</Table.Cell>
                <Table.Cell className="percentChange">{this.props.transaction.buy ? this.props.transaction.profit : ''}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </List.Content>
      </List.Item>
    );
  }
}

Transaction.propTypes = {
  transaction: PropTypes.shape( {
    symbol: PropTypes.string,
    price: PropTypes.string,
    tradingPair: PropTypes.string,
    amount: PropTypes.string,
    transactionCost: PropTypes.string,
    image_url: PropTypes.string,
    currentWorth: PropTypes.string,
    profit: PropTypes.string,
    buy: PropTypes.bool,
  } ),
};

Transaction.defaultProps = {
  transaction: {},
};


export default Transaction;
