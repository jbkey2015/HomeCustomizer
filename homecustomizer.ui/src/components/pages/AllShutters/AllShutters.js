import './AllShutters.scss';
import React from 'react';
import shuttersData from '../../../helpers/data/shuttersData';
import Shutters from '../../shared/Shutter/Shutter';

class AllShutters extends React.Component {
  state = {
    shutters: [],
  }

  componentDidMount() {
    shuttersData.getAllShutters()
      .then((shutters) => this.setState({ shutters }))
      .catch((err) => console.error('error from get shutters', err));
  }

  render() {
    const { shutters } = this.state;
    return (
      <div className="AllShutters">
        <div>
          <div className="shutters d-flex flex-wrap">
          {shutters.map((shutter) => <Shutters key={shutter.id} shutter={shutter} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default AllShutters;