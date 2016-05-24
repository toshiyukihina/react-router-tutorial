import React from 'react';
import Promise from 'bluebird';
import request from 'superagent';
import ProgressBar from 'react-progress-bar-plus';
import FontAwesome from 'react-fontawesome';
import { Table, Row } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

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
    console.log(this.props.location.query);

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
  
  handleRepoClick(repo) {
    console.log(JSON.stringify(repo));
  }

  render() {
    const {state, percent} = this.state.loading;
    
    return (
      <div>
        <ProgressBar percent={percent} autoIncrement={state} />
        <h4>{ this.props.params.userName }</h4>
        <Row>
          <BootstrapTable data={this.state.repos} striped={true} hover={true} height="500">
            <TableHeaderColumn dataField="id" isKey={true} dataAlign="right" dataSort={true}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField="language" dataSort={true}>Language</TableHeaderColumn>
            <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
          </BootstrapTable>
        </Row>
      </div>
    );
  }

}

export default Repos;
