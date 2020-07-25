import './CommunitiesAvailableHomes.scss';
import React from 'react';
import communityData from '../../../helpers/data/communityData';
import AvailableHomes from '../../shared/AvailableHomes/AvailableHomes';

class CommunitiesAvailableHomes extends React.Component {
  state = {
    community: {},
    availableHomes: [],
  }

  getCommunitiesAvailableHomeData = (CommunityId) => {
    debugger
    communityData.getAvailableHomesByCommunityId(CommunityId)
      .then((availableHomes) => {
        this.setState({ availableHomes:availableHomes.data })
        debugger
        console.log(this.state.availableHomes)
      })
      .catch((err) => console.error('error in get available homes by community id', err));
  }

  componentDidMount() {
    const { communityId } = this.props.match.params; 
    communityData.getCommunityById(Number(communityId))
      .then((response) => {  
        this.setState({ community: response.data });
        this.getCommunitiesAvailableHomeData(this.state.community.id);
      })
      .catch((err) => console.error('error in get single community', err));
  }
  
  render() {
    const {
      availableHomes
    } = this.state;
    return (
      <div className="availableHome-outer-container">
        <div className="availableHomes-card-container">
          {availableHomes.map((availableHomes) => <AvailableHomes key={availableHomes.id} availableHomes={availableHomes} />) }
        </div>
      </div>
    );
  }
}

export default CommunitiesAvailableHomes;