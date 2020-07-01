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
        <button className="login-button btn btn-dark" onClick={this.loginClickEvent}>Google Login</button>
        <h1> Our BusyBaby Tracker </h1>
        
        <img className="home-pic" src="https://i.imgur.com/CxsmvyA.jpg?2" alt="two babies with their heads together" />
        <div className="intro-text">
        <p>Welcome to BusyBaby Tracker!  BusyBaby is created for parents who want to keep track of their child's milestones, but don't want to spend time putting together a baby book that will eventually sit on a shelf.  BusyBaby allows you to have access to this information in the moment, at the doctor's office, and ten years down the road when you take a trip down memory lane!  There are so many major milestones children reach, and it is also fun to track the small ones that are just special to you and your family.  BusyBaby allows you to create and track your own milestones, whether big or small! All you need to do is click the add a child link in the navigation bar and track away!</p>
        </div>
      </div>
    );
  }
}
export default Auth;
