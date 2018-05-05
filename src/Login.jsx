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
      password: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = ( e ) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(this.state);
    fetch("/api/login", {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          })
          .then(function(response) {
            console.log('response is', response)
          })
          .catch(error=>console.log('Error',error));
  }


  render() {

    return (

      <div className="loginForm">
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={6}>
              <Header>Login</Header>
              <Form onSubmit={this.onSubmit}>
                {/* {error && <Message
                              error={error}
                              content="That username/password is incorrect. Try again!"
                          />} */}
                <Form.Input label="Enter Email" placeholder="Email" name="email" type="email" onChange={this.onChange} required />
                <Form.Input label="Enter Password" placeholder="Password" name="password" type="password" onChange={this.onChange} required />
                <Form.Button type="submit" inverted >Login</Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button.Group>
          <Link to="/"><Button inverted >Back</Button></Link>
          <Button.Or />
          <Link to="/register"><Button inverted >Register Page</Button></Link>
        </Button.Group>
      </div>

    );
  }
}

export default Login;
