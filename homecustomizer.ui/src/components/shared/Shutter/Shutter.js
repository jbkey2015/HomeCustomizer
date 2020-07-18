import React from 'react';

import './Shutter.scss';

class Shutters extends React.Component {

  render() {
    const { imageUrl } = this.props.shutter;
    return (
      <div className="Shutter col-4">
      <div className="card">
        <div className="card-body">
          <img src={imageUrl} className="card-img-top" alt=""/>
        </div>
      </div>
    </div>
    );
  }
}

export default Shutters;