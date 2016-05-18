import React from 'react';
import { Link } from 'react-router';
import { Table, Row } from 'react-bootstrap';
import NavLink from './NavLink';

class Repos extends React.Component {

  constructor(props) {
    super(props);
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
          { this.props.children }
        </Row>
      </div>
    );
  }

}

export default Repos;
