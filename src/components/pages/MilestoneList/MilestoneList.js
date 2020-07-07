import React from 'react';
import {Link} from 'react-router-dom';
import './MilestoneList.scss';
import smash from '../../../helpers/data/smash';
import milestoneData from '../../../helpers/data/milestoneData';

class MilestoneList extends React.Component {
  state = {
    milestones: [],
  }
  componentDidMount() {
    this.getMilestones();
  }

  getMilestones = () => {
    const { childId } = this.props.match.params;
    smash.getMilestoneWithDevType(childId)
    .then((milestones) => this.setState({ milestones }))
    .catch((err) => console.error('cannot get milestones', err));
  }
  removeMilestone = (milestoneId) => {
    milestoneData.removeMilestone(milestoneId)
    .then(() => this.getMilestones())
    .catch((err) => console.error('cannot remove milestone', err));
  }

  render() {
    const { milestones } = this.state;
    const buildMilestoneListCards = milestones.map((milestone) => (
      <MilestoneList key={milestone.id} milestone={milestone} removeMilestone={this.removeMilestone} />
    ));
    const homeLink = `/home`;
    return (
      <div className="MilestoneList">
        <h2> Milestone Tracker </h2>
        <Link className="arrow btn btn-dark mb-2" to={homeLink}> <i class="fas fa-arrow-circle-left"></i> </Link>
        <div className="d-flex flex-wrap">
          { buildMilestoneListCards }
        </div>
      </div>
    )
  }
}
export default MilestoneList;
