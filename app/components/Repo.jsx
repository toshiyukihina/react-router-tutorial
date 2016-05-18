import React from 'react';

class Repo extends React.Component {

  render() {
    return (
      <div>
        {`${this.props.params.userName}::${this.props.params.repoName}`}
      </div>
    );
  }
  
}

export default Repo;
