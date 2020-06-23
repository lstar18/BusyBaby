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
    const editChildLink = `/child/edit/child1`;
    const singleChildLink = '/child/child1'; 
                

    return (
        <div className="ChildCard col-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{child.name}</h3>
              <p className="card-text">{child.birthday}</p>
              <Link className="btn btn-dark" to={editChildLink}> <i className="fas fa-pencil-alt"></i> </Link>
              <Link className="btn btn-dark" to={singleChildLink}> <i className="fas fa-eye"></i> </Link>
            </div>
         </div>  
        </div>
    );
  }
}
export default ChildCard;
