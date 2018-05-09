import { Button, Modal, Dropdown, Divider, Input } from 'semantic-ui-react';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
// 9 | BTC    |  10.8 |      1 | https://www.cryptocompare.com/media/19633/btc.png           | t   |        2
//
class App extends Component {
  constructor() {
    super();

    this.handlePurchaseInput = this.handlePurchaseInput.bind( this );
    this.handleAmountInput = this.handleAmountInput.bind( this );
    this.handleChange = this.handleChange.bind( this );

    this.state = {
      startDate: moment(),
      buy: true,
      sell: false,
      coins: [],
    };

    this.fetchCoins();
  }

  fetchCoins() {
    fetch( '/api/coins', {
      // method: ''
      credentials: 'same-origin',
    } )
      .then( response => response.json() )
      .then( ( coins ) => {
        const parsedCoins = coins.map( coin => ( { key: coin.Symbol, value: coin.Symbol, text: coin.FullName } ) );
        this.setState( { coins: parsedCoins } );
      } )
      .catch( ( error ) => {
        this.console.error( error );
      } );
  }

  handlePurchaseInput( event ) {
    if ( !event.target.value.match( /^[+-]?\d+(\.\d+)?$/ ) && event.target.value.length > 0 ) {
      this.setState( {
        purchase_error: true,
      } );
    } else {
      this.setState( {
        purchase_error: false,
      } );
    }
  }

  handleAmountInput( event ) {
    if ( !event.target.value.match( /^[+-]?\d+(\.\d+)?$/ ) && event.target.value.length > 0 ) {
      this.setState( {
        amount_error: true,
      } );
    } else {
      this.setState( {
        amount_error: false,
      } );
    }
  }

  handleBuyState( state ) {
    this.setState( {
      buy: !state,
      sell: false,
    } );
  }

  handleSellState( state ) {
    this.setState( {
      sell: !state,
      buy: false,
    } );
  }

  handleChange( date ) {
    this.setState( {
      startDate: date,
    } );
  }


  render() {
    return (
      <div className="App">
        <br />
        <br />
        <br />
        <br />
        <Modal dimmer="blurring" trigger={<Button>Add Transaction</Button>}>
          <Modal.Content>
            <Modal.Description>

              <Button inverted color="green" active={this.state.buy} onClick={() => this.handleBuyState( this.state.buy )}>Buy</Button>
              <Button inverted color="red" active={this.state.sell} onClick={() => this.handleSellState( this.state.sell )}>Sell</Button>

              <Divider />
              <DatePicker
                class="ui small input"
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
              <Divider />
              <Dropdown placeholder="Select Currency" fluid search selection options={this.state.coins} />
              <Divider />
              <Input size="small" error={this.state.purchase_error} placeholder="Purchase price.." onChange={this.handlePurchaseInput} />
              <Divider />
              <Input size="small" error={this.state.amount_error} placeholder={this.state.sell ? 'Amount sold' : 'Amount bought'} onChange={this.handleAmountInput} />
              <Divider />

              <Button inverted color={this.state.buy ? 'green' : 'red'}>Add transaction</Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default App;
