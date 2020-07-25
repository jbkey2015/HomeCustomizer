import './Home.scss';
import React from 'react';
import communityData from '../../../helpers/data/communityData';
import Community from '../../shared/Community/Community';

class Home extends React.Component {
  state = {
    communities: [],
  }

  componentDidMount() {
    communityData.getAllCommunities()
      .then((communities) => this.setState({ communities }))
      .catch((err) => console.error('error from get all communities', err));
  }

  render() {
    const { communities } = this.state;
    return (
      <div className="HomePage">
        <div>
          <div className="Communities d-flex flex-wrap">
          {communities.map((community) => <Community key={community.id} community={community} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;