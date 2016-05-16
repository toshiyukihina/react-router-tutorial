import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

require('../node_modules/bootstrap/dist/css/bootstrap.css')

import App from './components/app'

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App} />
    </Router>
  ),
  document.body.appendChild(document.createElement('div'))
);
