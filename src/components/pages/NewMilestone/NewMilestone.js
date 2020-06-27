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
      devTypes: [],
      selectedDevChange:'',
      selectedChildChange: '',
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
  developmentChange =(e) => {
    e.preventDefault();
    console.log('e.target', e.target.value)
    this.setState({ selectedDevChange: e.target.value});
  }
  childChange =(e) => {
    e.preventDefault();
    console.log('e.target', e.target.value)
    this.setState({ selectedChildChange: e.target.value});
  }
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
        selectedDevChange,
        selectedChildChange,
      } = this.state;

      const newMilestone = {
        title: title,
        description: description,
        imageUrl: imageUrl,
        date: date,
        typeId: selectedDevChange,
        childId: selectedChildChange,
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

    const buildChildDropdown = () => children.map((child) => <option key={child.id} value={child.id}>{child.name}</option>);
    const buildDevTypeDropdown = () => devTypes.map((devType) => <option key={devType.id} value={devType.id}>{devType.name}</option>);

    return (
      <div className="NewMilestone col-6 offset-3">
        <h2> Add a New Milestone! </h2>
        <form>
          <div className="form-group">
            <label forHtml="milestone-title">Title </label>
            <input 
            type="text" 
            className="form-control" 
            id="milestone-title" 
            value={title}
            onChange={this.titleChange}/>
          </div>
          <div className="form-group">
            <label forHtml="milestone-description">Description </label>
            <input 
            type="text" 
            className="form-control" 
            id="milestone-description" 
            value={description}
            onChange={this.descriptionChange}/>
          </div>
          <div className="form-group">
            <label forHtml="milestone-imageUrl"> Image Url </label>
            <input 
            type="text" 
            class="form-control" 
            id="milestone-imageUrl" 
            value={imageUrl}
            onChange={this.imageUrlChange}/>
          </div>
          <div className="form-group">
            <label forHtml="milestone-date"> Date </label>
            <input 
            type="text" 
            className="form-control" 
            id="milestone-date" 
            value={date}
            onChange={this.dateChange}/>
          </div>

          <div className="form-group">
            <label forHtml="milestone-dropdown-child">Select Child</label>
            <select 
            className="form-control" 
            id="milestone-dropdown-child"
            value={this.state.selectedChildChange}
            onChange={this.childChange}> 
              <option value=''> Select a Child </option> 
              {buildChildDropdown()}
            </select>
          </div>
          <div className="form-group">
            <label forHtml="milestone-dropdown-devType">Select Developmental Type</label>
            <select className="form-control" 
            id="milestone-dropdown-devType"
            value={this.state.selectedDevChange}
            onChange={this.developmentChange}> 
              <option value=''> Select a Development Type </option> 
              {buildDevTypeDropdown()}
            </select>
          </div>
         
          <button type="submit" className="btn btn-primary" onClick={this.saveMilestone}>Submit Milestone</button>
        </form>
      </div>
    );
    }
  }

export default NewMilestone;
