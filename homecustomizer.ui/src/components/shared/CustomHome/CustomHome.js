import React from 'react';

import './CustomHome.scss';

class CustomHome extends React.Component {

  render() {
    const { imageUrl } = this.props.customHome;
    return (
      <div className="CustomHome col-4">
      <div className="card">
        <div className="card-body">
          <img src={imageUrl} className="card-img-top" alt=""/>
        </div>
      </div>
    </div>
    );
  }
}

export default CustomHome;