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

    const username = e.target.elements[0].value;
    const repo = e.target.elements[1].value;
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
              <tr>
                <td>
                  <NavLink to="/repos/reactjs/react-router">React Router</NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <NavLink to="/repos/facebook/react">Factbook</NavLink>
                </td>
              </tr>
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
