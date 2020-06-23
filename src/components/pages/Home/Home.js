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
        <div className="d-flex flex-wrap">
          { buildChildrenCards }
        </div>
      </div>
    );
  }
}

export default Home;
