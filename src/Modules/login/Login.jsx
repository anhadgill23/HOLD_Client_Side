import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Grid, Message } from 'semantic-ui-react';
import {
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

class Login extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      email: '',
      password: '',
      id: '',
      error: '',
    };
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = ( e ) => {
    e.preventDefault();
    const { email, password } = this.state;
    fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            credentials: 'same-origin'
          })
          .then(function(response) {
            return response.json();
          })
          .then((data) => {
              if (data.err === 'Email or password incorrect') {
                  this.setState({ error: 'Your email or password is incorrect, please try again.'})
              } else {
                this.setState({ id: data.id });
                this.props.handleAuth(true, this.state.id, data.name);
                this.props.history.push(`/portfolio/${data.id}`);
              }
            })
  }


  render() {
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={6}>
                <Header>Login</Header>
                <Form onSubmit={this.onSubmit}>
                  {this.state.error && <Message
                    content={this.state.error}
                  />}
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
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Login;
