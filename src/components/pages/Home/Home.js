import React from 'react';
import childData from '../../../helpers/data/childData';
import ChildCard from '../../shared/ChildCard/ChildCard';
import './Home.scss';
import authData from '../../../helpers/data/authData';

class Home extends React.Component {
  state = {
    children: [],
  }
  
  getChildren = () => {
    const uid  = authData.getUid();
    childData.getChildrenbyUid(uid)
    .then((children) => this.setState({ children }))
    .catch((err) => console.error('cannot get children', err));
  }

  componentDidMount() {
    this.getChildren();
  }

  render() {
   const { children } = this.state;

   const buildChildrenCards = children.map((child) => (
     <ChildCard key={child.id} child={child} children={children}/>
   ))
    return (
      <div className="Home">
        <h1> Our BusyBaby Tracker </h1>
        <img className="home-pic" src="https://i.imgur.com/CxsmvyA.jpg?2" alt="two babies with their heads together" />
        <div className="intro-text">
          <p> Welcome to BusyBaby Tracker!  BusyBaby was created for the parents who wants to keep track of their child's milestones, but doesn't want to spend time putting in a baby book that will eventually just sit on a shelf.  BusyBaby allows you have access to this information in the moment, at the doctor, and ten years down the road when you take a trip down memory lane!  There are so many major milestones children reach, and it is also fun to track the small ones that are just special to you and your family.  BusyBaby allows you to create your own milestone, whether big or small! All you need to do is add a child to your profile and track away! </p>
        </div>
        <h2> Our Child(ren) </h2>
        <div className="d-flex flex-wrap">
          { buildChildrenCards }
        </div>
      </div>
    );
  }
}

export default Home;
