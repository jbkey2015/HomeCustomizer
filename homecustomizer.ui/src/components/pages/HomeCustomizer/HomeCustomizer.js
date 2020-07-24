import './HomeCustomizer.scss';
import React from 'react';
import colorBoardData from '../../../helpers/data/colorBoardData';
import ColorBoard from '../../shared/ColorBoard/ColorBoard';

class HomeCustomizer extends React.Component {
  state = {
    colorBoards: [],
  }

  componentDidMount() {
    colorBoardData.getAllColorBoards()
      .then((colorBoards) => this.setState({ colorBoards }))
      .catch((err) => console.error('error from get all color boards', err));
  }

  render() {
    const { colorBoards } = this.state;
    return (
      <div className="AllColorBoards">
        <h1>Color Boards</h1>
        <div>
          <div className="shutters d-flex flex-wrap">
          {colorBoards.map((colorBoard) => <ColorBoard key={colorBoard.id} colorBoard={colorBoard} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCustomizer;