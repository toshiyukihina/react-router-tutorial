import React from 'react';
import { IndexLink } from 'react-router';
import { Grid, Nav, NavItem, Col } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import NavLink from './NavLink';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    console.log(`* handleSelect: ${eventKey}`);
  }

  render() {
    return (
      <div>
        <Grid>
          <h1>React Router Tutorial</h1>
          <Col md={4}>
            <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
              <IndexLinkContainer to={{ pathname: "/" }}>
                <NavItem eventKey={1}>Home</NavItem>
              </IndexLinkContainer>
              <LinkContainer to={{ pathname: "/about" }}>
                <NavItem eventKey={2}>About</NavItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: "/repos" }}>
                <NavItem eventKey={3}>Repos</NavItem>
              </LinkContainer>
            </Nav>
          </Col>
          <Col md={8}>
            { this.props.children }
          </Col>
        </Grid>
      </div>
    );
  }
  
}

export default App;
