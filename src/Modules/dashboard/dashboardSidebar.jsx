import React, { Component } from 'react';
import logo2 from '../logo2.png';

class DashboardSidebar extends Component {
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