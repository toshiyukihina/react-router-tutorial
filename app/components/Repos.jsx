import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Table, Row, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import NavLink from './NavLink';

class Repos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      repo: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleRepoChange = this.handleRepoChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const username = e.target.elements[0].value.trim();
    const repo = e.target.elements[1].value.trim();
    browserHistory.push(`/repos/${username}/${repo}`);

    this.setState({ userName: '', repo: '' });
  }

  handleUserNameChange(e) {
    this.setState({ userName: e.target.value });
  }

  handleRepoChange(e) {
    this.setState({ repo: e.target.value });
  }

  render() {
    const navLinkNodes = () => {
      const navLinks = [{
        id: 1, url: '/repos/reactjs/react-router', label: 'React Router'
      }, {
        id: 2, url: '/repos/facebook/react', label: 'Facebook'
      }];

      return navLinks.map((navLink) => {
        return (<tr key={navLink.id}><td><NavLink to={navLink.url}>{navLink.label}</NavLink></td></tr>);
      })
    };

    return (
      <div>
        <Row>
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormControl type="text" placeholder="userName" value={this.state.userName} onChange={this.handleUserNameChange} />
            </FormGroup>
            {' / '}
            <FormGroup>
              <FormControl type="text" placeholder="repo" value={this.state.repo} onChange={this.handleRepoChange} />
            </FormGroup>
            <Button type="submit" disabled={!this.state.userName || !this.state.repo}>Go</Button>
          </Form>
        </Row>
        <br />
        <Row>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Repository</th>
              </tr>
            </thead>          
            <tbody>
              {navLinkNodes()}
            </tbody>
          </Table>
        </Row>
        <Row>
          { this.props.children }
        </Row>
      </div>
    );
  }

}

Repos.contextTypes = {
  router: React.PropTypes.object
};

export default Repos;
