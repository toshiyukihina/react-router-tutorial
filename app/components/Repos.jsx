import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Table, Row, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import NavLink from './NavLink';

class Repos extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const repo = e.target.elements[1].value;
    const path = `/repos/${username}/${repo}`;
    browserHistory.push(path);
  }

  render() {
    return (
      <div>
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
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormControl type="text" placeholder="userName" />
            </FormGroup>
            {' / '}
            <FormGroup>
              <FormControl type="text" placeholder="repo" />
            </FormGroup>
            <Button type="submit">Go</Button>
          </Form>
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
