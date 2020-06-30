import React from 'react';
import {Link} from 'react-router-dom';
import './NewChild.scss';
import authData from '../../../helpers/data/authData';
import childData from '../../../helpers/data/childData';

class NewChild extends React.Component {
  state = {
    name: '',
    birthday: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ childName: e.target.value });
  }

  birthdayChange = (e) => {
    e.preventDefault();
    this.setState({ childBirthday: e.target.value });
  }

  saveChild = (e) => {
    e.preventDefault();
    const {
      childName,
      childBirthday,
    } = this.state;

    const newChild = {
      name: childName,
      birthday: childBirthday,
      uid: authData.getUid(),
    };

    childData.postChild(newChild)
    .then(() => this.props.history.push('/home'))
    .catch((err) => console.error('cannot save new child', err));
  }
  render() {
    const {
      childName,
      childBirthday,
    } = this.state;
    const homeLink = `/home`;
    return (
      <div className="NewChild col-6 offset-3">
         <h2> Add a New Child: </h2>
         <Link className="arrow btn btn-dark mb-2" to={homeLink}> <i class="fas fa-arrow-circle-left"></i> </Link>
        <form>
          <div class="form-group">
            <label forHtml="child-name"> Name: </label>
            <input 
            type="text" 
            class="form-control" 
            id="child-name" 
            value={childName}
            onChange={this.nameChange}/>
          </div>
          <div class="form-group">
            <label forHtml="child-birthday">Birthday: </label>
            <input 
            type="text" 
            class="form-control" 
            id="child-birthday" 
            value={childBirthday}
            onChange={this.birthdayChange}/>
          </div>
          <button type="submit" class="add-child-button btn btn-dark btn-lg" onClick={this.saveChild}> Add <i className="fas fa-baby"></i></button>
        </form>
      </div>
    );
  }
}

export default NewChild;
