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
            <h3 className="card-title">{milestone.title}</h3>
            <img className="card-img" src={milestone.imageUrl} alt="child achieving the milestone" />
            <p className="card-text">{milestone.date}</p>
            <p className="card-text">{milestone.description}</p>
            <p className="card-text">{milestone.typeId}</p>
            <Link className="milestone-button btn btn-warning mr-1" to={editMilestoneLink}> <i className="fas fa-pencil-alt"></i> </Link>
            <button className="btn btn-danger" onClick={() => removeMilestone(milestone.id)}> <i className="fas fa-trash"></i>  </button>
          </div>
       </div>  
      </div>
    );
  }
}

export default MilestoneCard;
