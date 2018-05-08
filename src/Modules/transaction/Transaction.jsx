import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Image, Table, Button, Icon } from 'semantic-ui-react';


class Transaction extends Component {
  constructor( props ) {
    super( props );
    this.handleDeleteButton = this.handleDeleteButton.bind( this );
  }

  handleDeleteButton( ) {
    console.log( this.props.transaction.id );
    // Handle deleting here
  }


  render() {
    const transactionType = this.props.transaction.buy ? 'Cost' : 'Proceeds';
    const buyOrSell = this.props.transaction.buy ? `${this.props.transaction.symbol} Buy Price` : `${this.props.transaction.symbol} Sell Price`;
    const amountBoughtOrSoldHeader = this.props.transaction.buy ? 'Bought' : 'Sold';
    return (

      <List.Item>

        <List.Content floated="right">

          <Table fixed unstackable color={this.props.transaction.buy ? 'green' : 'red'} celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center"><Image src={this.props.transaction.image_url} size="mini" circular /></Table.HeaderCell>
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
            </Table.Body>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>{transactionType}</Table.HeaderCell>
                <Table.HeaderCell>Worth</Table.HeaderCell>
                <Table.HeaderCell>% Change</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Button color="red" inverted animated="vertical" onClick={this.handleDeleteButton}>
                    <Button.Content hidden>Delete</Button.Content>
                    <Button.Content visible>
                      <Icon name="trash" />
                    </Button.Content>
                  </Button>
                </Table.Cell>
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
    id: PropTypes.number,
  } ),
};

Transaction.defaultProps = {
  transaction: {},
};


export default Transaction;
