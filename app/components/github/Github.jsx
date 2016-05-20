import React from 'react';
import { browserHistory } from 'react-router';
import { Form, FormGroup, FormControl, Button, Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Github extends React.Component {

  constructor(repos, context) {
    super(repos, context);

    this.state = {
      userName: new String(this.props.params.userName || '')
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    browserHistory.push(`/github/${e.target.elements[0].value.trim()}/repos?a=1&b=2`);
  }

  handleChange(e) {
    this.setState({ userName: e.target.value });
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Form inline onSubmit={this.handleSubmit}>
              <FormGroup>
                <FormControl type="text"
                             placeholder="Enter Username"
                             onChange={this.handleChange}
                             value={this.state.userName}
                             disabled={this.state.isFetching}
                />
              </FormGroup>
              {' '}
              <Button bsStyle="primary" type="submit" disabled={!this.state.userName || this.state.isFetching}>
                <FontAwesome name="search" />{' Search'}
              </Button>
            </Form>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={12}>
            { this.props.children }
          </Col>
        </Row>
      </div>
    );
  }

}

Github.contextType = {
  router: React.PropTypes.object
};

import Repos from './Repos';
Github.Repos = Repos;
import BlankRepos from './BlankRepos';
Github.BlankRepos = BlankRepos;

export default Github;
