import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  render() {
    return (
      <div className="Auth">
        <h1> Our BusyBaby Tracker </h1>
        <img className="home-pic" src="https://i.imgur.com/CxsmvyA.jpg?2" alt="two babies with their heads together" />
        <div className="intro-text">
          <p> Welcome to BusyBaby Tracker!  BusyBaby was created for the parents who wants to keep track of their child's milestones, but doesn't want to spend time putting in a baby book that will eventually just sit on a shelf.  BusyBaby allows you have access to this information in the moment, at the doctor, and ten years down the road when you take a trip down memory lane!  There are so many major milestones children reach, and it is also fun to track the small ones that are just special to you and your family.  BusyBaby allows you to create your own milestone, whether big or small! All you need to do is add a child to your profile and track away! </p>
        </div>
        <button className="btn btn-info" onClick={this.loginClickEvent}>Google Login</button>
      </div>
    );
  }
}
export default Auth;
