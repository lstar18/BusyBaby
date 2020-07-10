import React from 'react';
import {Link} from 'react-router-dom';
import './EditMilestone.scss';
import milestoneData from '../../../helpers/data/milestoneData';
import childData from '../../../helpers/data/childData';
import authData from '../../../helpers/data/authData';
import devTypeData from '../../../helpers/data/devTypeData';

class EditMilestone extends React.Component {
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
  componentDidMount() {
      const uid  = authData.getUid();
      const { milestoneId } = this.props.match.params;
      milestoneData.getSingleMilestone(milestoneId)
      .then((response) => {
        const milestone = response.data;
        this.setState({
          title: milestone.title,
          description: milestone.description,
          imageUrl: milestone.imageUrl,
          date: milestone.date,
          selectedChildChange: milestone.childId,
          selectedDevChange: milestone.typeId,
        })
      })
      .catch((err) => console.error('cannot update milestone', err));
      childData.getChildrenbyUid(uid)
      .then((children) => this.setState({ children }))
      .catch((err) => console.error('cannot get chidlren', err));
      devTypeData.getDevTypes()
      .then((devTypes) => this.setState({ devTypes }))
      .catch((err) => console.error('cannot get devType', err));
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
    this.setState({ selectedDevChange: e.target.value});
  }
  childChange =(e) => {
    e.preventDefault();
    this.setState({ selectedChildChange: e.target.value});
  }

 
  updateMilestone = (e) => {
    e.preventDefault();
    const { milestoneId } = this.props.match.params;
    const {  
        title,
        description,
        imageUrl,
        date,
        selectedDevChange,
        selectedChildChange,
      } = this.state;

      const updatedMilestone = {
        title: title,
        description: description,
        imageUrl: imageUrl,
        date: date,
        typeId: selectedDevChange,
        childId: selectedChildChange,
        uid: authData.getUid()
      };
      milestoneData.putMilestone(updatedMilestone, milestoneId)
      .then(() => this.props.history.push(`/child/${selectedChildChange}`))
      .catch((err) => console.error('cannot update new milestone', err))
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
    const homeLink = `/home`;
    return (
      <div className="EditMilestone col-6 offset-3">
        <h2> Update Milestone! </h2>
        <Link className="arrow btn btn-dark mb-2" to={homeLink}> <i class="fas fa-arrow-circle-left"></i> </Link>
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
         
          <button type="submit" className="update-button btn btn-dark" onClick={this.updateMilestone}>Update Milestone</button>
        </form>
      </div>
    );
  }
}
export default EditMilestone;
