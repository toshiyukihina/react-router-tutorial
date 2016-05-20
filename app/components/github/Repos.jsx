import React from 'react';
import Promise from 'bluebird';
import request from 'superagent';
import ProgressBar from 'react-progress-bar-plus';
import FontAwesome from 'react-fontawesome';
import { Table, Row } from 'react-bootstrap';

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
    
    const fields = [
      'name',
      'language',
      'description'
    ];

    const headerCells = fields.map((col, i) => {
      return (
        <th key={i}>{col.toUpperCase()}</th>
      );
    });

    const header = (<tr>{headerCells}</tr>);

    const repos = this.state.repos.map((repo, i) => {
      const dataCells = (repo) => {
        return fields.map((col, i) => {
          return (<td key={i}>{repo[col]}</td>);
        });
      };

      return (
        <tr key={i} onClick={this.handleRepoClick.bind(this, repo)}>
          {dataCells(repo)}
        </tr>
      );
    });

    return (
      <div>
        <ProgressBar percent={percent} autoIncrement={state} />
        <h4>{ this.props.params.userName }</h4>
        <Row>
          <Table responsive striped bordered condensed hover>
            <thead>{header}</thead>
            <tbody>{repos}</tbody>
          </Table>
        </Row>
      </div>
    );
  }

}

export default Repos;
