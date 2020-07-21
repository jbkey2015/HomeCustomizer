import React from 'react';

import './ColorBoard.scss';

class ColorBoard extends React.Component {

  render() {
    const { imageUrl } = this.props.colorBoard;
    return (
      <div className="ColorBoard col-4">
      <div className="card">
        <div className="card-body">
          <img src={imageUrl} className="card-img-top" alt=""/>
        </div>
      </div>
    </div>
    );
  }
}

export default ColorBoard;