import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import Register from './Register.jsx';
import Login from './Login.jsx';

class App extends Component {
  state = {}
  handleOpen = () => this.setState({ active: true })   
  handleClose = () => this.setState({ active: false })
  // constructor( props ) {
  //   super( props );
  //   this.state = {
  //     currentUser: { name: '' },
  //   };
  // }
  render() {
    const { active } = this.state 
    return (

      <div className="App">
        
        <div className="buttons-container">
        
          <Link to="/register">
            <Button type="button" className="register" size="huge" inverted color="olive">Register</Button>
          </Link>
          <Link to="/login">
            <Button type="button" className="login" size="huge" inverted color="violet">Login</Button>
          </Link>

        </div>
        
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />

      </div>


    );
  }
}

export default App;
