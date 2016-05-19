import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import About from './components/About';
import Repos from './components/Repos';
import Repo from './components/Repo';
import Home from './components/Home';
import Github from './components/Github';

require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/font-awesome/css/font-awesome.css')
require('./index.css');

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
      <Route path="/github" component={Github}>
        <Route path="/github/repos/:userName" component={Repos} />
      </Route>
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.body.appendChild(document.createElement('div')));
