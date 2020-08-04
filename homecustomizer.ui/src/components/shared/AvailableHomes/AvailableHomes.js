import React from 'react';
import { Link } from 'react-router-dom';

import './AvailableHomes.scss';

class AvailableHomes extends React.Component {

  render() {
    const { imageUrl } = this.props.availableHomes;
    return (
      <div className="AvailableHomes col-4">
      <div className="card">
      <Link to={`/colorBoard/${this.props.availableHomes.id}`}>
        <div className="card-body">
          <img src={imageUrl} className="card-img-top" alt=""/>
        </div>
      </Link>
      </div>
    </div>
    );
  }
}

export default AvailableHomes;