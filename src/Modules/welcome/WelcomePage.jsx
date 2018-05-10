import React, { Component } from 'react';
import { Button, Grid, Divider } from 'semantic-ui-react';
import ReactRevealText from 'react-reveal-text';
import Graph from '../graph/src/Graph';
import {
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

class WelcomePage extends Component {
  constructor ( props ) {
    super ( props )
    this.state = {
      show: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 700);
  }


  render() {
    return (
      <Grid.Row>

      <Grid.Column>
        <div className="intro">
          <ReactRevealText
            text="THE FUTURE IS NOW, TRANSCEND YOUR LIMITS"
            show={this.state.show}
            className="my-class-name"
            style={{color: "#079186", fontSize: "30px", lineHeight: "36px"}}
          />

        </div>
        <br />
        <br />
        <br />
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
