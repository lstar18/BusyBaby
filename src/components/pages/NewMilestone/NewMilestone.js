import React from 'react';
import './NewMilestone.scss';
import milestoneData from '../../../helpers/data/milestoneData';
import childData from '../../../helpers/data/childData';
import authData from '../../../helpers/data/authData';

class NewMilestone extends React.Component {
  state = {
      title: '',
      description: '',
      imageUrl: '',
      date: '',
      children: [],
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
  componentDidMount() {
      const uid  = authData.getUid();
      console.log('uid', uid);
      childData.getChildrenbyUid(uid)
      .then((children) => this.setState({ children }))
      .catch((err) => console.error('cannot get chidlren', err));
    }
  saveMilestone  = (e) => {
    const {  
        title,
        description,
        imageUrl,
        date,
      } = this.state;

      const newMilestone = {
        title: title,
        description: description,
        imageUrl: imageUrl,
        date: date,
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
    } = this.state;
    const buildChildDropdown = () => children.map((child) => <option value={child.id}>{child.name}</option>);

    return (
      <div className="NewMilestone col-12">
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
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
              {buildChildDropdown()}
            </select>
          </div>
          <button type="submit" class="btn btn-primary" onClick={this.saveMilestone}>Submit Milestone</button>
        </form>
      </div>
    );
    }
  }

export default NewMilestone;
