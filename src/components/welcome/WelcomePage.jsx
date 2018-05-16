import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import ReactRevealText from 'react-reveal-text';
import { Link } from 'react-router-dom';
import HistoricalChart from '../historical_chart/HistoricalChart.jsx';


class WelcomePage extends Component {
  constructor( props ) {
    super( props );
    this.CURRENTAGG = '5';
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
                text="You make your cryptocurrency investments."
                show={this.state.show}
                className="my-class-name"
                style={{
                        color: '#FFFFFF',
                        letterSpacing: '4px',
                        fontSize: '38px',
                        fontWeight: '300',
                        lineHeight: '43px',
                      }}
              />
              <ReactRevealText
                text="We’ll keep track of them."
                show={this.state.show}
                className="my-class-name"
                style={{
                        color: '#FFFFFF',
                        letterSpacing: '4px',
                        fontSize: '38px',
                        fontWeight: '300',
                        lineHeight: '43px',
                      }}
              />
            </div>
          </div>
          <div className="ui divider" />
          <br />
          <HistoricalChart />
          <br />
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default WelcomePage;
