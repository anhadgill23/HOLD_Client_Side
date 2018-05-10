import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import Graph from '../graph/src/Graph';
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
      <Grid.Column>
        <div className="buttons-container" >
          <Link to="/register">
            <Button type="button" className="register" size="huge" inverted >Register</Button>
          </Link>
          <Link to="/login">
            <Button type="button" className="login" size="huge" inverted >Login</Button>
          </Link>
        </div>
        <br/>
        <div className="ui divider"></div>
        <br/>
        <Graph />
      </Grid.Column>
      </Grid.Row>
    )
  }
}

export default WelcomePage;
