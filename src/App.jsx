import React, { Component } from 'react';
<<<<<<< HEAD
import { Button, Dimmer, Header, Icon, Form, Field, Input, Sidebar } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter,
} from 'react-router-dom';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Ticker from './Modules/ticker/Ticker.jsx';
import PieChart from './Modules/piechart/PieChart.jsx';
import SingleCurrencyPage from './Modules/single_curency_page/SingleCurrencyPage.jsx';


class App extends Component {

  // constructor( props ) {
  //   super( props );
  //   this.state = {
  //     currentUser: { name: '' },
  //   };
  // }
  render() {

    return (


      <div className="App">
      {/*<Sidebar visible="true">
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
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>

      <div>
        <SingleCurrencyPage />

      </div>


    );
  }
}

export default App;
