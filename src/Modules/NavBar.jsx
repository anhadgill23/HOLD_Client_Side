import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
// import logo from './logo.svg';
// import '../styles/navbar.scss'

class NavBar extends Component {
  render() {
    return (
      <Menu>
        <Menu.Menu>
          <Menu.Item>
            My Crypto Tracker
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar;
