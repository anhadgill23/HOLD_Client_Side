import React, { Component } from 'react';
import { Grid, Loader, Dimmer } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Register from './Modules/register/Register.jsx';
import Login from './Modules/login/Login.jsx';
import NavBar from './Modules/navbar/NavBar.jsx';
import WelcomePage from './Modules/welcome/WelcomePage.jsx';
import Portfolio from './Modules/portfolio_page/Portfolio.jsx';
import SingleCurrencyPage from './Modules/single_curency_page/SingleCurrencyPage.jsx';
import Chart from './Modules/chart/Chart.jsx';


class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      isLoggedIn: false,
      userId: '',
      userName: '',
      loading: false,
    };
    this.setLoggedin = this.setLoggedin.bind( this );
    this.setSymbol = this.setSymbol.bind( this );
    this.handleLoading = this.handleLoading.bind( this );
  }

  setLoggedin( loggedIn, id, userName ) {
    this.setState( { isLoggedIn: loggedIn, userId: id, userName } );
    localStorage.setItem( 'isLoggedIn', loggedIn );
    localStorage.setItem( 'userId', id );
    localStorage.setItem( 'userName', userName );
  }

  setSymbol( symbol ) {
    this.setState( { symbol } );
  }
  handleLoading() {
    if ( this.state.loading === true ) {
      this.setState( { loading: false } );
    } else {
      this.setState( { loading: true } );
    }
  }

  componentWillMount() {
    const loginStat = localStorage.getItem( 'isLoggedIn' );
    const id = localStorage.getItem( 'userId' );
    const name = localStorage.getItem( 'userName' );

    this.setState( {
      isLoggedIn: loginStat,
      userId: id,
      userName: name,
    } );
  }

  render() {
    return (

      <div className="App">
        <Dimmer active={this.state.loading} page>
          <Loader size="massive" />
        </Dimmer>
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

              <Route
                path="/portfolio"
                render={props => (
                  this.state.isLoggedIn ?
                  ( <Portfolio {...props} userName={this.state.userName} userId={this.state.userId} setSymbol={this.setSymbol} handleLoading={this.handleLoading} /> ) :
                  ( <Redirect to="/login" /> )
                  )}
              />
              <Route
                path="/singlecurrency"
                render={props => (
                this.state.isLoggedIn ?
                ( <SingleCurrencyPage {...props} userName={this.state.userName} userId={this.state.userId} symbol={this.state.symbol} handleLoading={this.handleLoading} /> ) :
                ( <Redirect to="/login" /> )
                )}
              />
              <Route path="/" exact component={WelcomePage} />
            </Switch>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
