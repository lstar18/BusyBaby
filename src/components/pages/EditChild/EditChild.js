import React from 'react';
import './EditChild.scss';
import childData from '../../../helpers/data/childData';
import authData from '../../../helpers/data/authData';

class EditChild extends React.Component {
  state = {
    name: '',
    birthday: '',
  }
  componentDidMount() {
    const { childId } = this.props.match.params;
    childData.getSingleChild(childId)
    .then((response) => {
      const child = response.data;
      this.setState({
        name: child.name,
        birthday: child.birthday,
      });
    })
    .catch((err) => console.error('cannot update child', err));
  }
  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  birthdayChange = (e) => {
    e.preventDefault();
    this.setState({ birthday: e.target.value });
  }

  updateChild = (e) => {
    e.preventDefault();
    const { childId } = this.props.match.params;
    const {
      name,
      birthday,
    } = this.state;

    const updatedChild = {
      name: name,
      birthday: birthday,
      uid: authData.getUid(),
    };

    childData.putChild(updatedChild, childId)
    .then(() => this.props.history.push('/home'))
    .catch((err) => console.error('cannot update new child', err));
  }
  render() {
    const {
      name,
      birthday,
    } = this.state;

    return (
      <div className="NewChild col-6 offset-3">
         <h2> Update Child Information! </h2>
        <form>
          <div class="form-group">
            <label for="child-name"> Name </label>
            <input 
            type="text" 
            class="form-control" 
            id="child-name" 
            value={name}
            onChange={this.nameChange}/>
          </div>
          <div class="form-group">
            <label for="child-birthday">Birthday </label>
            <input 
            type="text" 
            class="form-control" 
            id="child-birthday" 
            value={birthday}
            onChange={this.birthdayChange}/>
          </div>
          <button type="submit" class="btn btn-primary" onClick={this.updateChild}>Update Child</button>
        </form>
      </div>
    );
  }
}

export default EditChild;
