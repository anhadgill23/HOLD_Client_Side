import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input } from 'semantic-ui-react'

class Register extends Component {
    state = {}

    handleOpen = () => this.setState({ active: true })   
    handleClose = () => this.setState({ active: false })

    render() {
    const { active } = this.state  
        return (
            <div className="buttons">
                <Button type="button" className="register" onClick={this.handleOpen} size="huge" inverted color="olive">Register</Button>
                <Dimmer
                active={active}
                onClickOutside={this.handleClose}
                page
                >
                <Form>
                    <Form.Input label='Enter Email' placeholder='Email' type='email' width={6} />
                    <Form.Input label='Enter Password' placeholder='Password' type='password' width={6} />
                    <Form.Input label='Confirm Password' placeholder='Confirm Password' type='password' width={6} />
                    <Form.Button type="button" inverted>Register</Form.Button> 
                </Form>
                </Dimmer>
            </div>
        );
    }
  }
  
  export default Register;
  