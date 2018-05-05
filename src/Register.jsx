import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Message } from 'semantic-ui-react';

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
    console.log('state is:', this.state);

    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   type: 'POST',
    //   data: this.state,
    //   success: function(data) {
    //     console.log('ajax success', data);
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error('ajax error', this.props.url, status, err.toString());
    //   }.bind(this)
    // });
//     fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: JSON.stringify(data), // data can be `string` or {object}!
//   headers: new Headers({
//     'Content-Type': 'application/json'
//   })
// }).then(res => res.json())
// .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response));



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

  render() {
    return (
      <div className="registerForm">
        <Form onSubmit={this.onSubmit}>
          {this.state.error && <Message
            content="Your passwords don't match. Try again!"
          />}
          <Form.Input label="Enter Name" placeholder="Name" name="name" onChange={this.onChange} width={6} required />
          <Form.Input label="Enter Email" placeholder="Email" name="email" onChange={this.onChange} type="email" width={6} required />
          <Form.Input label="Enter Password" placeholder="Password" name="password" onChange={this.onChange} type="password" width={6} required />
          <Form.Input label="Confirm Password" placeholder="Confirm Password" name="confirmPassword" onChange={this.onChange} type="password" width={6} required />
          <Form.Button type="submit" inverted>Register</Form.Button>
        </Form>
      </div>
    );
  }
}

export default Register;

