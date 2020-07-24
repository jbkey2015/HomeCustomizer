import React from 'react';

import './Community.scss';

class Community extends React.Component {

  render() {
    const { imageUrl, name } = this.props.community;
    return (
      <div className="Community col-7">
      <div className="card">
        <div className="card-body">
          <header>{name}</header>
          <img src={imageUrl} className="card-img-top" alt=""/>
        </div>
      </div>
    </div>
    );
  }
}

export default Community;