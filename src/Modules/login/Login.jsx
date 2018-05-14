import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Form, Grid, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      email: '',
      password: '',
      id: '',
      error: '',
    };
    this.onChange = this.onChange.bind( this );
    this.onSubmit = this.onSubmit.bind( this );
  }
  onChange( e ) {
    this.setState( {
      [e.target.name]: e.target.value,
    } );
  }

  onSubmit( e ) {
    e.preventDefault();
    fetch( '/api/login', {
      method: 'POST',
      body: JSON.stringify( this.state ),
      headers: new Headers( {
        'Content-Type': 'application/json',
      } ),
      credentials: 'same-origin',
    } )
      .then( response => response.json() )
      .then( ( data ) => {
        if ( data.err === 'Email or password incorrect' ) {
          this.setState( { error: 'Your email or password is incorrect, please try again.' } );
        } else {
          this.setState( { id: data.id } );
          this.props.handleAuth( true, this.state.id, data.name );
          this.props.history.push( `/portfolio/${data.id}` );
        }
      } );
  }


  render() {
    return (
      <Grid.Row className="login-page">
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
                  <Button className="ui grey button" type="submit" size="large" >Login</Button>
                  <Link to="/"><Button className="ui grey button" size="large">Back</Button></Link>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Login;

Login.propTypes = {
  handleAuth: PropTypes.func,
  history: PropTypes.shape( {
    push: PropTypes.func,
  } ),
};

Login.defaultProps = {
  history: {},
  handleAuth: () => {},
};

