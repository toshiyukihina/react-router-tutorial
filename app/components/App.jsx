import React from 'react';
import { Link } from 'react-router';
import { Grid, Nav, NavItem, Col, Navbar, Glyphicon } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import NavMenuItems from './NavMenuItems'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    console.log(`* handleSelect: ${eventKey}`);
  }

  render() {
    const navMenu = () => {
      return NavMenuItems.map((menuItem) => {
        const navIcon = React.createElement(
          FontAwesome,
          {
            name: menuItem.icon
          },
          ` ${menuItem.label}`
        );

        const navItem = React.createElement(
          NavItem,
          {
            eventKey: menuItem.id
          },
          navIcon
        );

        return React.createElement(
          menuItem.isIndex ? IndexLinkContainer : LinkContainer,
          {
            to: {
              pathname: menuItem.path
            },
            key: menuItem.id
          },
          navItem
        );
      });
    }
    
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <FontAwesome name="github" />{' '}
                React Router Tutorial
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        
        <Grid>
          <Col md={3}>
            <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
              { navMenu() }
            </Nav>
          </Col>
          <Col md={9}>
            { this.props.children }
          </Col>
        </Grid>
      </div>
    );
  }
  
}

export default App;
