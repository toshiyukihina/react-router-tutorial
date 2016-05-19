import React from 'react';
import { Form, FormGroup, FormControl, Button, Grid, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Promise from 'bluebird';
import request from 'superagent';

class Github extends React.Component {

  constructor(repos) {
    super(repos);

    this.state = {
      userName: '',
      isFetching: false,
      repositories: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  fetchRepositories(userName) {
    return new Promise((resolve, reject) => {
      request.get(`https://api.github.com/users/${userName}/repos`)
             .end((err, res) => {
               resolve(res);
             });
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ isFetching: true });

    this.fetchRepositories(e.target.elements[0].value.trim())
        .then((res) => {
          this.setState({ userName: '', repositories: res.body });
        })
        .finally(() => {
          this.setState({ isFetching: false });
        });
  }

  handleChange(e) {
    this.setState({ userName: e.target.value });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
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
          </Row>
          <br />
          <Row>
            { JSON.stringify(this.state.repositories) }
          </Row>
        </Grid>
      </div>
    );
  }

}

export default Github;
