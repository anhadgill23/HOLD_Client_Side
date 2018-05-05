import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Grid } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

class Login extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      email: '',
      password: '',
      error: false,
    };
  }

  onSubmit( e ) {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState( { error: false } );
    if ( !( email === 'george@1' && password === 'foreman' ) ) {
      return this.setState( { error: true } );
    }
    console.log( "you're logged in. yay!" );
    store.set( 'loggedIn', true );
  }

  render() {

    return (

      <div className="loginForm">
        <Form onSubmit={this.onSubmit}>
          {/* {error && <Message
                        error={error}
                        content="That username/password is incorrect. Try again!"
                    />} */}
          <Form.Input label="Enter Email" placeholder="Email" type="email" width={6} required />
          <Form.Input label="Enter Password" placeholder="Password" type="password" width={6} required />
          <Form.Button type="submit" inverted >Login</Form.Button>
        </Form>
      </div>

    );
  }
}

export default Login;
