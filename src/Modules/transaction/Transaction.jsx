import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Image } from 'semantic-ui-react';


class Transaction extends Component {
  render() {
    const transactionType = this.props.transaction.buy ? 'Cost' : 'Proceeds';
    const buyOrSell = this.props.transaction.buy ? `${this.props.transaction.symbol} Buy Price` : `${this.props.transaction.symbol} Sell Price`;
    const amountBoughtOrSoldHeader = this.props.transaction.buy ? 'Bought' : 'Sold';
    return (

      <List.Item>
        <List.Content floated="left">
          <Image src={this.props.transaction.image_url} size="mini" circular />
        </List.Content>
        <List.Content>

          <table>
            <tr>
              <th>{buyOrSell}</th>
              <th>Trading Pair</th>
              <th>Amount {amountBoughtOrSoldHeader}</th>
            </tr>
            <tr className="spacingRow">
              <td>{this.props.transaction.price}</td>
              <td>{this.props.transaction.tradingPair}</td>
              <td>{this.props.transaction.amount}</td>
            </tr>
            <tr>

              <td>{transactionType}</td>
              <td>Worth</td>
              <td>% Change</td>
            </tr>
            <tr>
              <td>{this.props.transaction.transactionCost}</td>
              <td>{this.props.transaction.currentWorth}</td>
              <td className="percentChange">{this.props.transaction.buy ? this.props.transaction.profit : ''}</td>
            </tr>
          </table>
        </List.Content>
      </List.Item>
    );
  }
}

Transaction.propTypes = {
  transaction: PropTypes.shape,
};

Transaction.defaultProps = {
  transaction: {},
};


export default Transaction;
