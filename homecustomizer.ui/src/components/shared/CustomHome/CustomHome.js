import React from 'react';

import './CustomHome.scss';

class CustomHome extends React.Component {

  render() {
    const { imageUrl, sidingColor, shutterColor } = this.props.customHome;
    return (
      <div className="CustomHome col-7">
        <p>This home has {sidingColor} siding with {shutterColor} shutters.</p>
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