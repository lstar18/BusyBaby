import React from 'react';
import './SingleChildView.scss';
import milestoneData from '../../../helpers/data/milestoneData';
import MilestoneCard from '../../shared/MilestoneCard/MilestoneCard';

class SingleChildView extends React.Component {
  state = {
    milestones: [],
  }
  componentDidMount() {
    this.getMilestones();
  }

  removeMilestone = (milestoneId) => {
    milestoneData.removeMilestone(milestoneId)
    .then(() => this.getMilestones())
    .catch((err) => console.error('cannot remove milestone', err));
  }
  getMilestones = () => {
    const { childId } = this.props.match.params;
    milestoneData.getMilestonesbyChildId(childId)
    .then((milestones) => this.setState({ milestones }))
    .catch((err) => console.error('cannot get milestones', err));
  }

 

  render() {
    const { milestones } = this.state;
    const buildMilestoneCards = milestones.map((milestone) => (
      <MilestoneCard key={milestone.id} milestone={milestone} removeMilestone={this.removeMilestone}/>
    ));
    return (
      <div className="SingleChildView">
        <h1> Milestones Tracker </h1>
        <div className="d-flex flex-wrap">
          { buildMilestoneCards }
        </div>
      </div>
    );
  }
}

export default SingleChildView;
