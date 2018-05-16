import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Image, Table } from 'semantic-ui-react';
import AddDeleteModal from '../addConfirmDeleteModal/add_confirm_delete_modal.jsx';


class Transaction extends Component {
  constructor( props ) {
    super( props );
    this.handleDeleteButton = this.handleDeleteButton.bind( this );
  }

  handleDeleteButton( ) {
    this.props.handleDelete( this.props.transaction.id );
  }


  render() {
    const { transaction } = this.props;
    const transactionType = transaction.buy ? 'Cost' : 'Proceeds';
    const buyOrSell = transaction.buy ? `${transaction.symbol} Buy Price` : `${transaction.symbol} Sell Price`;
    const amountBoughtOrSoldHeader = transaction.buy ? 'Bought' : 'Sold';
    // 2018-05-11T19:24:52.957Z
    return (

      <List.Item>
        <List.Content floated="right">

          <Table fixed unstackable color={transaction.buy ? 'green' : 'red'} celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center"><Image src={transaction.image_url} size="mini" circular /></Table.HeaderCell>
                <Table.HeaderCell>{buyOrSell}</Table.HeaderCell>
                <Table.HeaderCell>Trading Pair</Table.HeaderCell>
                <Table.HeaderCell>Amount {amountBoughtOrSoldHeader}</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{transaction.created_at.slice( 0, 10 )}</Table.Cell>
                <Table.Cell>{transaction.price}</Table.Cell>
                <Table.Cell>{transaction.tradingPair}</Table.Cell>
                <Table.Cell>{transaction.amount}</Table.Cell>
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
                  <AddDeleteModal handleDeleteButton={this.handleDeleteButton} />
                </Table.Cell>
                <Table.Cell>{transaction.transactionCost}</Table.Cell>
                <Table.Cell>{transaction.currentWorth}</Table.Cell>
                <Table.Cell className="percentChange">{transaction.buy ? transaction.profit : ''}</Table.Cell>
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
  handleDelete: PropTypes.func,
};

Transaction.defaultProps = {
  transaction: {},
  handleDelete: () => {},
};


export default Transaction;
