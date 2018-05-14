import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import ReactRevealText from 'react-reveal-text';
import Graph from '../graph/src/Graph';
import { Link } from 'react-router-dom';
import HistoricalChart from '../historical_chart/HistoricalChart.jsx';

class WelcomePage extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      show: false,
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState( { show: true } );
    }, 700 );
  }

  render() {
    return (
      <Grid.Row className="welcome-page">
        <Grid.Column>
          <div id="login-and-tagline">
            <div id="buttons-container" >
              <Link to="/register">
                <Button className="ui grey button" size="huge" >Register</Button>
              </Link>
              <Link to="/login">
                <Button className="ui grey button" size="huge" >Login</Button>
              </Link>
            </div>
            <br />
            <div className="intro">
              <ReactRevealText
                text="You make your cyptocurrency investments."
                show={this.state.show}
                className="my-class-name"
                style={{
 color: '#FFFFFF', letterSpacing: '4px', fontSize: '35px', fontWeight: 'bold', lineHeight: '36px',
}}
              />
              <ReactRevealText
                text="We’ll keep a track of them."
                show={this.state.show}
                className="my-class-name"
                style={{
 color: '#FFFFFF', letterSpacing: '4px', fontSize: '35px', fontWeight: 'bold', lineHeight: '36px',
}}
              />
            </div>
          </div>
          <div className="ui divider" />
          <br />
          <HistoricalChart />
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default WelcomePage;
