import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Message, Grid } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

class Register extends Component {
  constructor( props ) {
    super( props );
    this.state = { name: '', email: '', password: '', confirmPassword:'', error: false };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    this.setState( { error: false } );
    if ( this.state.password !== this.state.confirmPassword ) {
      this.setState( { error: true } );
    }
    console.log(this.state);
    if (!this.state.error) {
      fetch("/api/register", {
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
    }


  render() {
    return (
      <div className="registerForm">
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={6}>
              <Header>Register</Header>
              <Form onSubmit={this.onSubmit}>

                {this.state.error && <Message
                  content="Your passwords don't match. Try again!"
                />}
                <Form.Input label="Enter Name" placeholder="Name" name="name" onChange={this.onChange} required />
                <Form.Input label="Enter Email" placeholder="Email" name="email" onChange={this.onChange} type="email" required />
                <Form.Input label="Enter Password" placeholder="Password" name="password" onChange={this.onChange} type="password" required />
                <Form.Input label="Confirm Password" placeholder="Confirm Password" name="confirmPassword" onChange={this.onChange} type="password" required />
                <Form.Button type="submit" inverted>Register</Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button.Group>
          <Link to="/"><Button inverted >Back</Button></Link>
          <Button.Or />
          <Link to="/login"><Button inverted >Login Page</Button></Link>
        </Button.Group>
      </div>
    );
  }
}

export default Register;

