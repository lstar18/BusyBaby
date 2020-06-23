import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    const editChildLink = `/child/edit/12345`;
    const singleChildLink = `/child/child1`;
    return (
      <div className="Home">
        <h2>Home</h2>
        <Link className="btn btn-dark" to={editChildLink}> <i className="fas fa-pencil-alt"></i> </Link>
        <Link className="btn btn-success" to={singleChildLink}> <i className="fas fa-user-plus"></i> </Link>
      </div>
    );
  }
}

export default Home;
