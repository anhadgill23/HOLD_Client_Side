import React, { Component } from 'react';
import {logo2} from '../navbar/logo2.png'

class Portfolio_left extends Component {
  currentValue ( arr ) {
    let total = 0;
    arr.forEach(element => {
      total += element;
    })
    return total;
  };
  render() {
    console.log('this.props: ', this.props)

    const totalValue = this.currentValue( this.props.currentValuesFromAllCoins )
    const totalGain = this.currentValue( this.props.gainsFromAllCoins )
    return (
      <div>
          <img className="ui centered small image"src={logo2} alt="cross logo" />
          <h3 className="ui header">YOUR PORTFOLIO BALANCE</h3>
          <h1 className="ui header">${totalValue}</h1>
          <h4 className="green ui header"><i className="green angle double up icon"></i>${totalGain}</h4>
      </div>
    );
  }
}

export default Portfolio_left;