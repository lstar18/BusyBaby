import React from 'react';
import {Link} from 'react-router-dom';
import milestoneShape from '../../../helpers/propz/milestoneShape';
import './MilestoneCard.scss';

class MilestoneCard extends React.Component {
  static propTypes = {
    milestone: milestoneShape.milestoneShape,
  }
  render() {
    const { milestone } = this.props;
    const editMilestoneLink = `/milestone/edit/:12345`;

    return (
      <div className="MilestoneCard col-4">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{milestone.title}</h3>
            <img className="card-img" src={milestone.imageUrl} alt="child achieving the milestone" />
            <p className="card-text">{milestone.date}</p>
            <p className="card-text">{milestone.description}</p>
            <p className="card-text">{milestone.typeId}</p>
            <Link className="btn btn-dark" to={editMilestoneLink}> <i className="fas fa-pencil-alt"></i> </Link>
          </div>
       </div>  
      </div>
    );
  }
}

export default MilestoneCard;
