import './HomeCustomizer.scss';
import React from 'react';
import colorBoardData from '../../../helpers/data/colorBoardData';
import ColorBoard from '../../shared/ColorBoard/ColorBoard';
import availableHomesData from '../../../helpers/data/availableHomesData';

class HomeCustomizer extends React.Component {
  state = {
    colorBoards: [],
    colorSearch: "",
    resultSearch: [],
    wantsToSearch: false,
    availableHomes: {},
  }

  getColorBoardsByAvailableHomesData = (AvailableHomesId) => {
    colorBoardData.getColorBoardsByAvailableHomesId(AvailableHomesId)
      .then((colorBoards) => {
        this.setState({ colorBoards:colorBoards.data })
      })
      .catch((err) => console.error('error in get color boards by available homes id', err));
  }

  
  componentDidMount() {
    const { availableHomesId } = this.props.match.params; 
    availableHomesData.getAvailableHomesById(Number(availableHomesId))
      .then((response) => {  
        this.setState({ availableHomes: response.data });
        this.getColorBoardsByAvailableHomesData(this.state.availableHomes.id);
      })
      .catch((err) => console.error('error in get single available home', err));
  }

  dynamicSearch = (event) => {
    const colorSearch = event.target.value;
    if(colorSearch !== ''){      
      const filteredColorBoards = this.state.colorBoards.filter(cBoard => {
        return cBoard.sidingColor.toLowerCase().includes(colorSearch.toLowerCase()) ||  cBoard.shutterColor.toLowerCase().includes(colorSearch.toLowerCase())
      });
      this.setState({resultSearch: filteredColorBoards, wantsToSearch: true});
    }
    this.setState({ colorSearch: colorSearch })
  }

  render() {
    const { colorBoards } = this.state;
    return (
      <div className="AllColorBoards">
        <form className="form-inline my-2 my-lg-0">
          <input id="myInput" className="form-control mr-sm-2" value={this.state.colorSearch} onChange={this.dynamicSearch} type="search" placeholder="Search" aria-label="Search"></input>
        </form>
        {
          !this.state.wantsToSearch ?
          <div>
            <div>
              <div className="colorBoards d-flex flex-wrap">
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