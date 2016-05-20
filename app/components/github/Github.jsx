import React from 'react';
import { browserHistory } from 'react-router';
import { Form, FormGroup, FormControl, Button, Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Github extends React.Component {

  constructor(repos) {
    super(repos);

    this.state = {
      userName: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    browserHistory.push(`/github/repos/${e.target.elements[0].value.trim()}`);
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
                             placeholder="Enter username"
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

import Repos from './Repos'
Github.Repos = Repos;

export default Github;
