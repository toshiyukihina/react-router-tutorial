import React from 'react';
import { IndexLink } from 'react-router';
import NavLink from './nav_link';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
  
}

export default App;
