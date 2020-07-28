import './HomeCustomizer.scss';
import React from 'react';
import colorBoardData from '../../../helpers/data/colorBoardData';
import ColorBoard from '../../shared/ColorBoard/ColorBoard';

class HomeCustomizer extends React.Component {
  state = {
    colorBoards: [],
    colorSearch: "",
    resultSearch: [],
    wantsToSearch: false
  }

  componentDidMount() {
    colorBoardData.getAllColorBoards()
      .then((colorBoards) => this.setState({ colorBoards }))
      .catch((err) => console.error('error from get all color boards', err));
  }
  
  searchBtnEvt = (event) => {
    //logic
    event.preventDefault();

    console.log(this.state.colorSearch)
    if(this.state.colorSearch !== ''){
      
      const filteredColorBoards = this.state.colorBoards.filter(cBoard => {
        return cBoard.sidingColor.toLowerCase().includes(this.state.colorSearch.toLowerCase()) ||  cBoard.shutterColor.toLowerCase().includes(this.state.colorSearch.toLowerCase())
      });
      this.setState({resultSearch: filteredColorBoards, wantsToSearch: true});
    }
  }

  render() {
    const { colorBoards } = this.state;
    return (
      <div className="AllColorBoards">
        <form class="form-inline my-2 my-lg-0">
          <input id="myInput" class="form-control mr-sm-2" value={this.state.colorSearch} onChange={(event) => this.setState({colorSearch : event.target.value})} type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-primary my-2 my-sm-0" onClick={this.searchBtnEvt} type="submit">Search</button>
        </form>
        {
          !this.state.wantsToSearch ?
          <div>
            <div>
              <div className="shutters d-flex flex-wrap">
              {colorBoards.map((colorBoard) => <ColorBoard key={colorBoard.id} colorBoard={colorBoard} />)}
              </div>
            </div>
          </div>
          :
          <div>
            {this.state.resultSearch.map((colorBoard) => <ColorBoard key={colorBoard.id} colorBoard={colorBoard} />)}
          </div>
        }
      </div>
    );
  }
}

export default HomeCustomizer;