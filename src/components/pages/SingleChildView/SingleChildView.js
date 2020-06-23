import React from 'react';
import './SingleChildView.scss';
import milestoneData from '../../../helpers/data/milestoneData';
import MilestoneCard from '../../shared/MilestoneCard/MilestoneCard';

class SingleChildView extends React.Component {
  state = {
    milestones: [],
  }
  
  getMilestones = () => {
    const { childId } = this.props.match.params;
    milestoneData.getMilestonesbyChildId(childId)
    .then((milestones) => this.setState({ milestones }))
    .catch((err) => console.error('cannot get milestones', err));
  }

  componentDidMount() {
    this.getMilestones();
  }


  render() {
    const { milestones } = this.state;
    const buildMilestoneCards = milestones.map((milestone) => (
      <MilestoneCard key={milestone.id} milestone={milestone} />
    ));
    return (
      <div className="SingleChildView">
        <h2> Milestones Tracker </h2>
        <div className="d-flex flex-wrap">
          { buildMilestoneCards }
        </div>
      </div>
    );
  }
}

export default SingleChildView;
