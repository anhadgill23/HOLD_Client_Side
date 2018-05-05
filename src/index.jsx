import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import App from './App.jsx';
import 'semantic-ui-less/semantic.less';

require( '../styles/application.scss' );


ReactDOM.render( <Router>
  <App />
</Router>, document.getElementById( 'react-root' ) );
