import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/app';
import About from './components/about';
import Repos from './components/repos';
import Repo from './components/repo'

require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('./index.css');

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/repos" component={Repos}>
          <Route path="/repos/:userName/:repoName" component={Repo} />
        </Route>
        <Route path="/about" component={About} />
      </Route>
    </Router>
  ),
  document.body.appendChild(document.createElement('div'))
);
