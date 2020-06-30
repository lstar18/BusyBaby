import React from 'react';
import {Link} from 'react-router-dom';
import './SingleChildView.scss';
import milestoneData from '../../../helpers/data/milestoneData';
import MilestoneCard from '../../shared/MilestoneCard/MilestoneCard';
import smash from '../../../helpers/data/smash';

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
    smash.getMilestoneWithDevType(childId)
    .then((milestones) => this.setState({ milestones }))
    .catch((err) => console.error('cannot get milestones', err));
  }

 

  render() {
    const { milestones } = this.state;
    const buildMilestoneCards = milestones.map((milestone) => (
      <MilestoneCard key={milestone.id} milestone={milestone} removeMilestone={this.removeMilestone}/>
    ));
    const homeLink = `/home`;
    return (
      <div className="SingleChildView">
        <h1> Milestones Tracker </h1>
        <Link className="arrow btn btn-dark mb-2" to={homeLink}> <i class="fas fa-arrow-circle-left"></i> </Link>
        <div className="d-flex flex-wrap">
          { buildMilestoneCards }
        </div>
      </div>
    );
  }
}

export default SingleChildView;
