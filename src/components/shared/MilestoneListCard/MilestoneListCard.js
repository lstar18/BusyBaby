import React from 'react';
import milestoneShape from '../../../helpers/propz/milestoneShape';
import './MilestoneListCard.scss';

class MilestoneListCard extends React.Component {
  static propTypes = {
    milestone: milestoneShape.milestoneShape,
  }
  render() {
    const { milestone } = this.props;

    return (
      <div className="MilestoneListCard col-6 offset-3">
        <ul class="list-group">
          <li class="list-group-title"> Title: {milestone.title}</li>
          <li class="list-group-date"> Date reached: {milestone.date} </li>
          <li class="list-group-item"> Milestone Type: {milestone.devType}</li>
        </ul>
      </div>  
    )
  }
}
export default MilestoneListCard;
