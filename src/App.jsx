import React, { Component } from 'react';
import { Grid, Loader, Dimmer } from 'semantic-ui-react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Register from './components/register/Register.jsx';
import Login from './components/login/Login.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import WelcomePage from './components/welcome/WelcomePage.jsx';
import Portfolio from './components/portfolio_page/Portfolio.jsx';
import SingleCurrencyPage from './components/single_curency_page/SingleCurrencyPage.jsx';
import TransactionChartPage from './components/transaction_chart_page/TransactionChartPage.jsx';


class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      isLoggedIn: '',
      userId: '',
      userName: '',
      loading: false,
      visible: false,
    };
    this.setLoggedin = this.setLoggedin.bind( this );
    this.setSymbol = this.setSymbol.bind( this );
    this.handleLoading = this.handleLoading.bind( this );
    this.toggleVisibility = this.toggleVisibility.bind( this );
  }


  componentWillMount() {
    const loginStat = localStorage.getItem( 'isLoggedIn' );
    const id = localStorage.getItem( 'userId' );
    const name = localStorage.getItem( 'userName' );

    this.setState( {
      isLoggedIn: loginStat,
      userId: parseInt( id, 10 ),
      userName: name,
    } );
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

  toggleVisibility() {
    this.setState( { visible: !this.state.visible } );
  }


  render() {
    const {
      loading, isLoggedIn, userId, visible, userName,
    } = this.state;
    return (

      <div className="App">
        <Dimmer active={loading} page>
          <Loader size="massive" />
        </Dimmer>
        <NavBar
          isAuthorized={isLoggedIn}
          toggleVisibility={this.toggleVisibility}
          handleAuth={this.setLoggedin}
          userId={userId}
        />
        <div>
          <Grid stackable >
            <Switch>
              <Route
                exact
                path="/register"
                render={props => <Register {...props} handleAuth={this.setLoggedin} />}
              />
              <Route
                exact
                path="/login"
                render={props => <Login {...props} handleAuth={this.setLoggedin} />}
              />

              <Route
                path="/portfolio/:userId"
                exact
                render={props => (

                  ( isLoggedIn === 'true' ) ?
                  ( <Portfolio
                    {...props}
                    userName={userName}
                    userId={userId}
                    visible={visible}
                    setSymbol={this.setSymbol}
                    handleLoading={this.handleLoading}
                    loading={this.state.loading}
                  /> ) :
                  ( <Redirect to="/" /> )
                  )}

              />
              <Route
                exact
                path="/:userId/transactions/:symbol"
                render={props => (

                ( isLoggedIn === 'true' ) ?
                ( <SingleCurrencyPage
                  {...props}
                  userName={userName}
                  userId={userId}
                  visible={visible}
                  symbol={this.state.symbol}
                  handleLoading={this.handleLoading}
                /> ) :
                ( <Redirect to="/login" /> )
                )}
              />
              <Route
                path="/transactions/btc/chart"
                exact
                render={props => <TransactionChartPage {...props} visible={visible} />}
              />
              <Route
                path="/"
                exact
                render={props => (
                  ( isLoggedIn === 'true' ) ?
                  ( <Redirect to={`/portfolio/${userId}`} /> ) :
                  <WelcomePage />
                )}
              />
            </Switch>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
