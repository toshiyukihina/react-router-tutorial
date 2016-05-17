import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import About from './components/about';
import Repos from './components/repos';
import Repo from './components/repo';
import Home from './components/home';

require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('./index.css');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.body.appendChild(document.createElement('div')));
