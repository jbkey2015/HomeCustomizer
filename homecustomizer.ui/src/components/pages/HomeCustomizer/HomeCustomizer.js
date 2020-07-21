import './HomeCustomizer.scss';
import React from 'react';
import colorBoardData from '../../../helpers/data/colorBoardData';
import ColorBoard from '../../shared/ColorBoard/ColorBoard';

class HomeCustomizer extends React.Component {
  state = {
    colorBoard: [],
  }

  componentDidMount() {
    colorBoardData.getAllColorBoards()
      .then((colorBoard) => this.setState({ colorBoard }))
      .catch((err) => console.error('error from get all color boards', err));
  }

  render() {
    const { colorBoard } = this.state;
    return (
      <div className="AllColorBoards">
        <div>
          <div className="color-board-card-container">
          {colorBoard.map((colorBoard) => <ColorBoard key={colorBoard.id} colorBoard={colorBoard} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCustomizer;