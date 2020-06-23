import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    const editMilestoneLink = `/milestone/edit/:12345`;
    const editChildLink = `/child/edit/:12345`;
    return (
      <div className="Home">
        <h2>Home</h2>
        <Link className="btn btn-dark" to={editMilestoneLink}> <i className="fas fa-pencil-alt"></i> </Link>
        <Link className="btn btn-dark" to={editChildLink}> <i className="fas fa-pencil-alt"></i> </Link>
      </div>
    );
  }
}

export default Home;
