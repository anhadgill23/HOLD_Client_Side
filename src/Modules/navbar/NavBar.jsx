import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import logo2 from './logo2.png';
import { Link, Redirect } from 'react-router-dom';

class NavBar extends Component {
  constructor( props ) {
    super( props );
    this.handleLogout = this.handleLogout.bind( this );
  }
  handleLogout() {
    fetch( '/api/logout', {
      method: 'POST',
      credentials: 'same-origin',
    } )
      .then( ( result ) => {
        this.props.handleAuth( false, null, null );
      } );
  }
  render() {
    console.log( this.props.isAuthorized );
    return (
      <Menu>
        <Link to="/">
          <Menu.Item>
            <img src={logo2} alt="cross logo" /> HOLD
          </Menu.Item>
        </Link>
        {( this.props.isAuthorized == true || this.props.isAuthorized == 'true' ) &&
          <Menu.Item className="ui right floated button">
            <Link to="/">
            <Button secondary onClick={this.handleLogout} >
          Log Out
          </Button>
          </Link>
          </Menu.Item>}
      </Menu>
    );
  }
}
export default NavBar;
