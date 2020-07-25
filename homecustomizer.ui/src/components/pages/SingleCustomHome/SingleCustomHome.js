import './SingleCustomHome.scss';
import React from 'react';
import customHomeData from '../../../helpers/data/customHomeData';
import colorBoardData from '../../../helpers/data/colorBoardData';
import CustomHome from '../../shared/CustomHome/CustomHome';

class SingleCustomHome extends React.Component {
  state = {
    colorBoard: {},
    customHomes: [],
  }

  getCustomHomeData = (ColorBoardId) => {
    customHomeData.getCustomHomeByColorBoardId(ColorBoardId)
      .then((customHomes) => this.setState({ customHomes }))
      .catch((err) => console.error('error in get custom home by color board id', err));
  }

  componentDidMount() {
    const { colorBoardId } = this.props.match.params;    
    colorBoardData.getColorBoardById(Number(colorBoardId))
      .then((response) => {       
        this.setState({ colorBoard: response.data });
        this.getCustomHomeData(this.state.colorBoard.id);
      })
      .catch((err) => console.error('error in get single color board', err));
  }
  render() {
    const {
      customHomes
    } = this.state;
    return (
      <div className="customHome-outer-container">
        <div className="customHome-card-container">
          {customHomes.map((customHome) => <CustomHome key={customHome.id} customHome={customHome} />) }
        </div>
      </div>
    );
  }
}

export default SingleCustomHome;