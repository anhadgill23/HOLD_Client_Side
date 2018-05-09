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
    this.state = { name: '',
                   email: '',
                   password: '',
                   confirmPassword:'',
                   id: '',
                   error: false };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: false
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    if ( this.state.password !== this.state.confirmPassword ) {
      this.setState( { error: true } );
    } else {
      fetch("/api/register", {
              method: 'POST',
              body: JSON.stringify(this.state),
              headers: new Headers({
                'Content-Type': 'application/json'
              }),
              credentials: 'same-origin'
            })
            .then((response) => {

              return response.json()
            })
            .then((data) => {
                this.setState({ id: data.id });
                this.props.handleAuth(true, this.state.id);
                this.props.history.push(`/portfolio/${data.id}`);
            })
            .catch(error=>console.log('Error',error));
      }
    }


  render() {
    return (
      <Grid.Row>
        <Grid.Column width={16}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={6}>
              <Header>Register</Header>
              <Form onSubmit={this.onSubmit}>

                {this.state.error && <Message
                  content="Your passwords don't match. Try again!"
                />}
                {/*{error && <Message content="This email address already exist, please try again."/>}*/}
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
      </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Register;

