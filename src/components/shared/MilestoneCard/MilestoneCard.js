import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import milestoneShape from '../../../helpers/propz/milestoneShape';
import './MilestoneCard.scss';

class MilestoneCard extends React.Component {
  static propTypes = {
    milestone: milestoneShape.milestoneShape,
    removeMilestone: PropTypes.func.isRequired,
  }
  render() {
    const { milestone, removeMilestone } = this.props;
    const editMilestoneLink = `/milestone/edit/${milestone.id}`;

    return (
      <div className="MilestoneCard col-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{milestone.title}</h2>
            <img className="card-img" src={milestone.imageUrl} alt="child achieving the milestone" />
            <p className="card-text-date">{milestone.date}</p>
            <p className="card-text-desc">{milestone.description}</p>
            <p className="card-text-dev">{milestone.typeId}</p>
            <Link className="edit-milestone-button btn btn-dark mr-1" to={editMilestoneLink}> <i className="fas fa-pencil-alt"></i> </Link>
            <button className="delete-milestone-button btn btn-danger" onClick={() => removeMilestone(milestone.id)}> <i className="fas fa-trash"></i>  </button>
          </div>
       </div>  
      </div>
    );
  }
}

export default MilestoneCard;
