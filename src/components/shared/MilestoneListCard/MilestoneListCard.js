import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import milestoneShape from '../../../helpers/propz/milestoneShape';
import './MilestoneCard.scss';

class MilestoneListCard extends React.Component {
  static propTypes = {
    milestone: milestoneShape.milestoneShape,
    removeMilestone: PropTypes.func.isRequired,
  }
  render() {
    const { milestone, removeMilestone } = this.props;
    const editMilestoneLink = `/milestone/edit/${milestone.id}`;

    return (
      <div className="MilestoneListCard col-4">
        <ul class="list-group">
          <li class="list-group-title">Title: {milestone.title}</li>
          <li class="list-group-date">Date reached: {milestone.date} </li>
          <li class="list-group-item">Milestone Type: {milestone.devType}</li>
          <Link className="edit-milestone-button btn btn-dark mr-1" to={editMilestoneLink}> <i className="fas fa-pencil-alt"></i> </Link>
            <button className="delete-milestone-button btn btn-danger" onClick={() => removeMilestone(milestone.id)}> <i className="fas fa-trash"></i>  </button>
        </ul>
      </div>  
    )
  }
}
export default MilestoneListCard;
