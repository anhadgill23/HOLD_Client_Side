import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Register from './Modules/register/Register.jsx';
import Login from './Modules/login/Login.jsx';
import NavBar from './Modules/navbar/NavBar.jsx';
import WelcomePage from './Modules/welcome/WelcomePage.jsx';
import Portfolio from './Modules/portfolio_page/Portfolio.jsx';
import SingleCurrencyPage from './Modules/single_curency_page/SingleCurrencyPage.jsx';


class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      symbol: 'BTC',
      isLoggedIn: false,
      userId: '',
      userName: '',
    };
    this.setLoggedin = this.setLoggedin.bind( this );
  }

  setLoggedin( loggedIn, id, userName ) {
    this.setState( { isLoggedIn: loggedIn, userId: id, userName } );
  }

  render() {
    return (

      <div className="App">
        <NavBar isAuthorized={this.state.isLoggedIn} handleAuth={this.setLoggedin} />
        <div style={{ padding: '2em' }}>
          <Grid stackable>
            <Switch>
              <Route
                path="/register"
                render={props => <Register {...props} handleAuth={this.setLoggedin} />}
              />
              <Route
                path="/login"
                render={props => <Login {...props} handleAuth={this.setLoggedin} />}
              />
              <Route path="/portfolio" render={props => <SingleCurrencyPage {...props} userName={this.state.userName} symbol={this.state.symbol} userId={this.state.userId} />} />

              {/* <Route path="/portfolio" render={props => <Portfolio {...props} userName={this.state.userName} userId={this.state.userId} />} /> */}

              <Route path="/" component={WelcomePage} />
            </Switch>
          </Grid>
        </div>
      </div>


    );
  }
}

export default App;
