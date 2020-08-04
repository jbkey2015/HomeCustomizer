import React from 'react';
import { Link } from 'react-router-dom';

import './ColorBoard.scss';

class ColorBoard extends React.Component {

  render() {
    const { imageUrl } = this.props.colorBoard;
    return (
      <div className="ColorBoard col-4">
      <div className="colorBoardCard card">
        <Link to={`/customHome/${this.props.colorBoard.id}`}>
        <div className="card-body">
          <img src={imageUrl} className="card-img-top" alt=""/>
        </div>
        </Link>
      </div>
    </div>
    );
  }
}

export default ColorBoard;