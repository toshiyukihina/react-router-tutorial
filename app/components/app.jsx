import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/repos" activeClassName="active">Repos</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
  
}

export default App;
