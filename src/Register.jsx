import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input } from 'semantic-ui-react'

class Register extends Component {
    state = {}

    handleOpen = () => this.setState({ active: true })   
    handleClose = () => this.setState({ active: false })

    render() {
    const { active } = this.state  
    const registerForm = (
        <Form.Field>
            <label>Enter Email</label>
            <Input type='email' />
            <label>Enter Password</label>
            <Input type='password' />
            <label>Confirmation Password</label>
            <Input type='password' />
            <Button type="submit">Submit</Button>
        </Form.Field>
    )
    const loginForm = (
        <Form.Field>
            <label>Your Email</label>
            <Input type='email' />
            <label>Enter Password</label>
            <Input type='password' />
            <Button type="submit">Login</Button>
        </Form.Field>
    )

    function handleRegisterClick(e) {
        e.preventDefault();
        return (registerForm);
    }
      function handleLoginClick(e) {
        e.preventDefault();
        return (loginForm);
    }
    
        return (
            <div className="buttons">
                <Button type="button" className="register" onClick={this.handleOpen} size="huge" inverted color="olive">Register</Button>
                <Dimmer
                active={active}
                onClickOutside={this.handleClose}
                page
                >
                <Form.Field>
                    <label>Enter Email</label>
                    <Input type='email' />
                    <label>Enter Password</label>
                    <Input type='password' />
                    <label>Confirmation Password</label>
                    <Input type='password' />
                    <Button type="submit">Submit</Button>
                </Form.Field>
                </Dimmer>
            </div>
        );
    }
  }
  
  export default Register;
  