import React from 'react';

import './Siding.scss';

class Siding extends React.Component {

  render() {
    const { imageUrl } = this.props.siding;
    return (
      <div className="Siding col-4">
      <div className="card">
        <div className="card-body">
          <img src={imageUrl} className="card-img-top" alt=""/>
        </div>
      </div>
    </div>
    );
  }
}

export default Siding;