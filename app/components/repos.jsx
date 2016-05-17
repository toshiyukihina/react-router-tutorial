import React from 'react';
import ReactDOM from 'react-dom';
import NavLink from './nav_link';
import { Link } from 'react-router';

class Repos extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">Facebook</NavLink></li>
        </ul>
        { this.props.children }
      </div>
    );
  }

}

export default Repos;
