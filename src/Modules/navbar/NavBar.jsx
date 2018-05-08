import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import logo2 from './logo2.png';

class NavBar extends Component {
  constructor( props ){
    super ( props )
  }
  render() {
    return (
      <Menu>
        <Menu.Item>
          <img src={logo2} alt="cross logo" /> HOLD
        </Menu.Item>
        {this.props.isAuthorized && <Menu.Item className="ui right floated button">
          <Button secondary> Log Out</Button>
        </Menu.Item>}
      </Menu>
    );
  }
}

export default NavBar;
