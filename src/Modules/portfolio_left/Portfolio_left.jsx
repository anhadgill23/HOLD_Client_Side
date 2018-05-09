import React, { Component } from 'react';
import logo2 from '../logo2.png';

class DashboardSidebar extends Component {
  // constructor( props ) {
  //   super( props ) {
  //     this.state = {
  //       totalCurrentValue: '',
  //       totalgain: ''
  //     };
  //   }
  //   this.dummyData = this.dummyData.bind(this);
  // }

  // dummyData = [
  //     {
  //       "symbol": "ETH",
  //       "remaining": "100.0000",
  //       "currentValue": "74615.00",
  //       "originalValue": "1200.00",
  //       "gain": "73415.00",
  //       "percentageGain": "6017.92"
  //     },
  //     {
  //       "symbol": "LTC",
  //       "remaining": "23.0000",
  //       "currentValue": "3629.63",
  //       "originalValue": "2259.00",
  //       "gain": "1370.63",
  //       "percentageGain": "-39.33"
  //     }
  //   ];

  // currentValue (arr) {
  //   const sumCurrentValue = 0;
  //   const sumGain = 0;
  //   dummyData.forEach(element => {
  //     sumGain += element.gain;
  //     sumCurrentValue += element.currentValue;
  //   }
  // };

  render() {
    return (
      <div>
          <img className="ui centered small image"src={logo2} alt="cross logo" />
          <h3 className="ui header">YOUR PORTFOLIO BALANCE</h3>
          <h1 className="ui header">$7,459.42</h1>
          <h4 className="green ui header"><i className="green angle double up icon"></i>$590.22</h4>
      </div>
    );
  }
}

export default DashboardSidebar;