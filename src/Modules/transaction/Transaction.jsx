import React, { Component } from 'react';
import { List, Image, Table, Grid } from 'semantic-ui-react';

class Transaction extends Component {
  render() {
    const buy = this.props.coin.amount > 1;
    const transactionType = buy ? 'Cost' : 'Proceeds';
    const buyOrSell = buy ? `${this.props.coin.symbol} Buy Price` : `${this.props.coin.symbol} Sell Price`;
    const amountBoughtOrSoldHeader = buy ? 'Bought' : 'Sold';
    return (

      <List.Item>
        <List.Content floated="left">
          <Image src={this.props.coin.imageUrl} size="mini" circular />
        </List.Content>
        <List.Content>

          <table>
            <tr>
              <th>{buyOrSell}</th>
              <th>Trading Pair</th>
              <th>Amount {amountBoughtOrSoldHeader}</th>
            </tr>
            <tr className="spacingRow">
              <td>{this.props.coin.price}</td>
              <td>{this.props.coin.tradingPair}</td>
              <td>{this.props.coin.amount}</td>
            </tr>
            <tr>

              <td>{transactionType}</td>
              <td>Worth</td>
              <td>% Change</td>
            </tr>
            <tr>
              <td>{this.props.coin.transactionCost}</td>
              <td>{this.props.coin.currentWorth}</td>
              <td className="percentChange">{buy ? this.props.coin.profit : ''}</td>
            </tr>
          </table>
        </List.Content>
      </List.Item>
    );
  }
}

export default Transaction;
