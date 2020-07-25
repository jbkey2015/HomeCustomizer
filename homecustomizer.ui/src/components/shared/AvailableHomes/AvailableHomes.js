import React from 'react';

import './AvailableHomes.scss';

class AvailableHomes extends React.Component {

  render() {
    const { imageUrl } = this.props.availableHomes;
    return (
      <div className="AvailableHomes col-4">
      <div className="card">
        <div className="card-body">
          <img src={imageUrl} className="card-img-top" alt=""/>
        </div>
      </div>
    </div>
    );
  }
}

export default AvailableHomes;