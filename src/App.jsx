import React, { Component } from 'react';

import { Button, Dimmer, Header, Icon, Form, Field, Input, Sidebar } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter,
} from 'react-router-dom';
import Register from './Modules/register/Register.jsx';
import Login from './Modules/login/Login.jsx';
import Ticker from './Modules/ticker/Ticker.jsx';
import PieChart from './Modules/piechart/PieChart.jsx';
// import NavBar from './Modules/navbar/NavBar.jsx';
import Portfolio from './Modules/portfolio_page/Portfolio.jsx';
import SingleCurrencyPage from './Modules/single_curency_page/SingleCurrencyPage.jsx';


class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      isLoggedIn: false
    }
    this.setLoggedin = this.setLoggedin.bind(this);
  }

  setLoggedin( loggedIn ) {
    this.setState({ isLoggedIn: loggedIn});
    console.log(this.state);
  }
  render() {

    return (


      <div className="App">
      {/*<NavBar />*/}
      {/*<Sidebar visible="true" >
      <Ticker />
      </Sidebar>*/}
        <div className="buttons-container" >

          <Link to="/register">
            <Button type="button" className="register" size="huge" inverted color="olive">Register</Button>
          </Link>
          <Link to="/login">
            <Button type="button" className="login" size="huge" inverted color="violet">Login</Button>
          </Link>

        </div>
        {/*<PieChart />*/}
        <Switch>
          <Route path="/register" render={(props) => <Register {...props} handleAuth={this.setLoggedin} /> }
          />
          <Route path="/login" render={(props) => <Login {...props} handleAuth={this.setLoggedin} /> }
          />
          <Route path="/portfolio" component={SingleCurrencyPage} />
        </Switch>

      <div>
        {/*<SingleCurrencyPage />*/}
      </div>

      </div>


    );
  }
}

export default App;
