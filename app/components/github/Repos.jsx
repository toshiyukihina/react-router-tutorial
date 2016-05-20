import React from 'react';
import Promise from 'bluebird';
import request from 'superagent';
import FontAwesome from 'react-fontawesome';
import { Row } from 'react-bootstrap';
import ProgressBar from 'react-progress-bar-plus';

class Repos extends React.Component {

  constructor(repos) {
    super(repos);

    this.state = {
      repos: [],
      loading: {
        state: false,
        percent: 0
      }
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
    this.setState({
      loading: {
        state: true,
        percent: 10
      }
    });
      
    this.fetchRepositories(userName)
        .then((res) => {
          this.setState({ repos: res.ok ? res.body : [] })
        })
        .catch((e) => {})
        .finally(() => {
          this.setState({
            loading: {
              state: false,
              percent: 100
            }
          });
        })
  }

  componentDidMount() {
    this.updateRepositories(this.props.params.userName);
  }

  componentWillReceiveProps(nextProps) {
    this.updateRepositories(nextProps.params.userName);
  }
  
  render() {
    const {state, percent} = this.state.loading;
    
    return (
      <div>
        <ProgressBar percent={percent} autoIncrement={state} />
        <h4>{ this.props.params.userName }</h4>
        <Row>
          <pre>{JSON.stringify(this.state.repos)}</pre>
        </Row>
      </div>
    );
  }

}

export default Repos;
