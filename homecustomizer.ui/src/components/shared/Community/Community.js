import React from 'react';
import { Link } from 'react-router-dom';

import './Community.scss';

class Community extends React.Component {

  render() {
    const { imageUrl, name } = this.props.community;
    return (
      <div className="Community col-4">
      <div className="card">
      <Link to={`/availableHomes/${this.props.community.id}`}>
        <div className="card-body">
          <img src={imageUrl} className="card-img-top" alt=""/>
          <h4>{name}</h4>
        </div>
      </Link>  
      </div>
    </div>
    );
  }
}

export default Community;