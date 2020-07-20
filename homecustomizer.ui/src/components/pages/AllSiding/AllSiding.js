import './AllSiding.scss';
import React from 'react';
import sidingData from '../../../helpers/data/sidingData';
import Siding from '../../shared/Siding/Siding';

class AllSiding extends React.Component {
  state = {
    siding: [],
  }

  componentDidMount() {
    sidingData.getAllSiding()
      .then((siding) => this.setState({ siding }))
      .catch((err) => console.error('error from get siding', err));
  }

  render() {
    const { siding } = this.state;
    return (
      <div className="AllSiding">
        <div>
          <div className="siding-card-container">
          {siding.map((siding) => <Siding key={siding.id} siding={siding} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default AllSiding;