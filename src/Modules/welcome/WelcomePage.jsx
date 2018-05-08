import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import {
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

class WelcomePage extends Component {
  constructor ( props ) {
    super ( props )
  }

  render() {
    return (
      <Grid.Row>
      <Grid.Column width={5}>
      </Grid.Column>
      <Grid.Column width={11}>
        <div className="buttons-container" >
          <Link to="/register">
            <Button type="button" className="register" size="huge" inverted color="olive">Register</Button>
          </Link>
          <Link to="/login">
            <Button type="button" className="login" size="huge" inverted color="violet">Login</Button>
          </Link>
        </div>
      </Grid.Column>
      </Grid.Row>
    )
  }
}

export default WelcomePage;
