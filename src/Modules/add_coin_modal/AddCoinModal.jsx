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
    this.handleChange = this.handleDateInput.bind( this );
    this.handleCurrencyInput = this.handleCurrencyInput.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );

    this.state = {
      startDate: moment(),
      buy: true,
      amount_error: true,
      purchase_error: true,
      symbol_error: true,
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
    if ( !event.target.value.match( /^[+-]?\d+(\.\d+)?$/ ) && event.target.value.length >= 0 ) {
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
    if ( !event.target.value.match( /^[+-]?\d+(\.\d+)?$/ ) && event.target.value.length >= 0 ) {
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
      buy: state,
    } );
  }


  handleDateInput( date ) {
    this.setState( {
      startDate: date,
    } );
  }

  handleCurrencyInput( event, data ) {
    console.log( data.value );
    if ( data.value ) {
      this.setState( {
        symbol_error: false,
        symbol: data.value,
      } );
    } else {
      this.setState( {
        symbol_error: true,
      } );
    }
  }

  handleSubmit() {
    if ( !this.state.amount_error && !this.state.purchase_error && !this.state.symbol_error ) {
      console.log( 'GOOD INPUT' );
    } else {
      console.log( 'BAD INPUT' );
    }
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

              <Button inverted color="green" active={this.state.buy} onClick={() => this.handleBuyState( true )}>Buy</Button>
              <Button inverted color="red" active={this.state.sell} onClick={() => this.handleBuyState( false )}>Sell</Button>

              <Divider />
              <DatePicker
                class="ui small input"
                selected={this.state.startDate}
                onChange={this.handleDateInput}
              />
              <Divider />
              <Dropdown placeholder="Select Currency" fluid search selection options={this.state.coins} error={this.state.symbol_error} onChange={this.handleCurrencyInput} />
              <Divider />
              <Input size="small" error={this.state.purchase_error} placeholder="Purchase price.." onChange={this.handlePurchaseInput} />
              <Divider />
              <Input size="small" error={this.state.amount_error} placeholder={this.state.sell ? 'Amount sold' : 'Amount bought'} onChange={this.handleAmountInput} />
              <Divider />

              <Button inverted color={this.state.buy ? 'green' : 'red'}onClick={this.handleSubmit}>Add transaction</Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default App;
