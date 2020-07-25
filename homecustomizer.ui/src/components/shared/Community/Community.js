import React from 'react';

import './Community.scss';

class Community extends React.Component {

  render() {
    const { imageUrl, name } = this.props.community;
    return (
      <div className="Community col-4">
      <div className="card">
        <div className="card-body">
          <img src={imageUrl} className="card-img-top" alt=""/>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
    );
  }
}

export default Community;