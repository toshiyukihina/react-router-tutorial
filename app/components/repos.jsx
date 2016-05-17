import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Repos extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
          <li><Link to="/repos/facebook/react">Facebook</Link></li>
        </ul>
      </div>
    );
  }

}
