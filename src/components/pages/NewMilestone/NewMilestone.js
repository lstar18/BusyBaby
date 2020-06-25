import React from 'react';
import './NewMilestone.scss';
import milestoneData from '../../../helpers/data/milestoneData';
import childData from '../../../helpers/data/childData';
import authData from '../../../helpers/data/authData';
import devTypeData from '../../../helpers/data/devTypeData';

class NewMilestone extends React.Component {
  state = {
      title: '',
      description: '',
      imageUrl: '',
      date: '',
      children: [],
      getDevTypes: [],
    }

  titleChange = (e) => {
      e.preventDefault();
      this.setState({ title: e.target.value });
    }

  descriptionChange = (e) => {
      e.preventDefault();
      this.setState({ description: e.target.value });
    }

  imageUrlChange = (e) => {
      e.preventDefault();
      this.setState({ imageUrl: e.target.value });
    }

  dateChange = (e) => {
      e.preventDefault();
      this.setState({ date: e.target.value });
    }
  // developmentChange =(e) => {
  //   e.preventDefault();
  //   this.setState({ selectedOption: e.target.value});
  // }
  componentDidMount() {
      const uid  = authData.getUid();
      childData.getChildrenbyUid(uid)
      .then((children) => this.setState({ children }))
      .catch((err) => console.error('cannot get chidlren', err));
      devTypeData.getDevTypes()
      .then((devTypes) => this.setState({ devTypes }))
      .catch((err) => console.error('cannot get devType', err));
    }
  saveMilestone  = (e) => {
    const {  
        title,
        description,
        imageUrl,
        date,
        devType,
      } = this.state;

      const newMilestone = {
        title: title,
        description: description,
        imageUrl: imageUrl,
        date: date,
        devType: devType,
        uid: authData.getUid()
      };
      milestoneData.postMilestone(newMilestone)
      .then(() => this.props.history.push('singleChildView'))
      .catch((err) => console.error('cannot save new milestone', err))
    }
  render() {
    const {
      title,
      description,
      imageUrl,
      date,
      children,
      devTypes,
    } = this.state;

    const buildChildDropdown = () => children.map((child) => <option value={child.id}>{child.name}</option>);
    const buildDevTypeDropdown = () => devTypes.map((devTypes) => <option value={devTypes.id}>{devTypes.name}</option>);

    return (
      <div className="NewMilestone col-6 offset-3">
        <h2> Add a New Milestone! </h2>
        <form>
          <div class="form-group">
            <label for="milestone-title">Title </label>
            <input 
            type="text" 
            class="form-control" 
            id="milestone-title" 
            value={title}
            onChange={this.titleChange}/>
          </div>
          <div class="form-group">
            <label for="milestone-description">Description </label>
            <input 
            type="text" 
            class="form-control" 
            id="milestone-description" 
            value={description}
            onChange={this.descriptionChange}/>
          </div>
          <div class="form-group">
            <label for="milestone-imageUrl"> Image Url </label>
            <input 
            type="text" 
            class="form-control" 
            id="milestone-imageUrl" 
            value={imageUrl}
            onChange={this.imageUrlChange}/>
          </div>
          <div class="form-group">
            <label for="milestone-date"> Image Url </label>
            <input 
            type="text" 
            class="form-control" 
            id="milestone-date" 
            value={date}
            onChange={this.dateChange}/>
          </div>

          <div class="form-group">
            <label for="milestone-dropdown-child">Select Child</label>
            <select class="form-control" id="milestone-dropdown-child">
              {buildChildDropdown()}
            </select>
          </div>
          <div class="form-group">
            <label for="milestone-dropdown-devType">Select Developmental Type</label>
            <select class="form-control" id="milestone-dropdown-devType"> 
              {buildDevTypeDropdown()}
            </select>
          </div>
         
          <button type="submit" class="btn btn-primary" onClick={this.saveMilestone}>Submit Milestone</button>
        </form>
      </div>
    );
    }
  }

export default NewMilestone;
