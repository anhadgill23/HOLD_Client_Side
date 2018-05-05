import 'semantic-ui-less/semantic.less';
import React from 'react';

import ReactDOM from 'react-dom';
import App from './App.jsx';


require( '../styles/application.scss' );


ReactDOM.render( <App />, document.getElementById( 'react-root' ) );
