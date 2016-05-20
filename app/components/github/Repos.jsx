import React from 'react';
import Promise from 'bluebird';
import request from 'superagent';

class Repos extends React.Component {

  constructor(repos) {
    super(repos);

    this.state = {
      repos: []
    };
  }

  fetchRepositories(userName) {
    return new Promise((resolve, reject) => {
      request.get(`https://api.github.com/users/${userName}/repos`)
             .end((err, res) => {
               resolve(res);
             });
    });
  }

  updateRepositories(userName) {
    this.fetchRepositories(userName)
        .then((res) => {
          this.setState({ repos: res.ok ? res.body : [] })
        })
        .catch((e) => {})
        .finally(() => {})
  }

  componentDidMount() {
    this.updateRepositories(this.props.params.userName);
  }

  componentWillReceiveProps(nextProps) {
    this.updateRepositories(nextProps.params.userName);
  }
  
  render() {
    return (
      <div>
        <h4>{this.props.params.userName}</h4>
        <pre>
          {JSON.stringify(this.state.repos)}
        </pre>
      </div>
    );
  }

}

export default Repos;
