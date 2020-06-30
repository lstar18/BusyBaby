import React from 'react';
import {Link} from 'react-router-dom';
import childShape from '../../../helpers/propz/childShape';

import './ChildCard.scss';

class ChildCard extends React.Component {
  static propTypes = {
    child: childShape.childShape,
  }

  
  render() {
    const { child } = this.props;
    const editChildLink = `/child/edit/${child.id}`;
    const singleChildLink = `/child/${child.id}`; 
                

    return (
        <div className="ChildCard col-4">
          <div className="card mb-2 mt-2">
            <div className="card-body">
              <h3 className="card-title">{child.name}</h3>
              <p className="card-text">{child.birthday}</p>
              <Link className="edit-child-button btn btn-dark mr-1" to={editChildLink}> Click to Edit Child  <i className="fas fa-pencil-alt"></i> </Link>
              <Link className="view-child-button btn btn-dark ml-1" to={singleChildLink}> Click to View Milestones  <i className="fas fa-eye"></i> </Link>
            </div>
         </div>  
        </div>
    );
  }
}
export default ChildCard;
