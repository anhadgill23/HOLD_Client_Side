import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Header, Icon } from 'semantic-ui-react';
import logo2 from './logo2.png';

class NavBar extends Component {
  render() {
    return (
      <Menu>
        <Menu.Menu>
          <Menu.Item>
              <img src={logo2} />My Crypto Tracker
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar;
