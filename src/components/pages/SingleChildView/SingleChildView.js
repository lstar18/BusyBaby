import React from 'react';
import {Link} from 'react-router-dom';
import './SingleChildView.scss';
import milestoneData from '../../../helpers/data/milestoneData';
import MilestoneCard from '../../shared/MilestoneCard/MilestoneCard';
import MilestoneListCard from '../../shared/MilestoneListCard/MilestoneListCard';
import smash from '../../../helpers/data/smash';

class SingleChildView extends React.Component {
  state = {
    milestones: [],
    isListView: false,
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
    const { milestones, isListView } = this.state;

    const buildMilestoneCards = milestones.map((milestone) => (
      <MilestoneCard key={milestone.id} milestone={milestone} removeMilestone={this.removeMilestone} />
    ));
     const buildMilestoneListCards = milestones.map((milestone) => (
      <MilestoneListCard key={milestone.id} milestone={milestone} removeMilestone={this.removeMilestone} />
    ));
    const homeLink = `/home`;
    return (
      <div className="SingleChildView">
        <h1> Milestones Tracker </h1>
        { isListView ? (<button type="button" onClick={()=> this.setState({ isListView:false })} class="toggle-button btn btn-dark mb-2 mr-3" data-toggle="button" aria-pressed="false" autocomplete="off">
          Card View
        </button>) : (<button type="button" onClick={()=> this.setState({ isListView:true })} class="toggle-button btn btn-dark mb-2 mr-3" data-toggle="button" aria-pressed="false" autocomplete="off">
          Print View
        </button>)}
        <Link className="arrow btn btn-dark mb-2" to={homeLink}> <i class="fas fa-arrow-circle-left"></i> </Link>
        <div className="d-flex flex-wrap m-2">
          { isListView ? buildMilestoneListCards : buildMilestoneCards }
        </div>
      </div>
    );
  }
}

export default SingleChildView;
