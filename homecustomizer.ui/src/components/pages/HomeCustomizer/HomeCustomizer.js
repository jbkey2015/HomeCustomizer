import './HomeCustomizer.scss';
import React from 'react';
import colorBoardData from '../../../helpers/data/colorBoardData';
import ColorBoard from '../../shared/ColorBoard/ColorBoard';

class HomeCustomizer extends React.Component {
  state = {
    colorBoards: [],
    colorSearch: "",
    resultSearch: [],
    wantsToSearch: false,
    toggleMainContainer:false,
    query: ''
  }

  // colorFilter = (query) => {
  //   const value = $(query.target).val().toLowerCase();
  //   const colors = $(`https://localhost:44334/api/colorBoard/${query}`);
  //   colors.hide();
  //   if (value !== '') {
  //     colors.filter(this.colorBoards).show();
  //     console.warn(this.colorBoards);
  //   } else {
  //     colors.show();
  //   }
  // };
  
  // searchFilter = () => {
  //   $('#myInput').on('keyup', (e) => {
  //     this.colorFilter(e);
  //   });
  // };

  componentDidMount() {
    colorBoardData.getAllColorBoards()
      .then((colorBoards) => this.setState({ colorBoards }))
      .catch((err) => console.error('error from get all color boards', err));
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


//   toggle = () => {
//     this.setState({toggleMainContainer:true})
//   }

//   endToggle = () => {
//     this.setState({toggleMainContainer:false})

//   }

//   isEmptyOrSpaces = (str) => {
//     return str === null || str.match(/^ *$/) !== null;
// }

//   handleOnInputChange = e => {
//     if(this.isEmptyOrSpaces(e.target.value)){
//       this.setState({query: ''})
//       this.endToggle()
//       return
//     }
//     const stateToChange ={}
//     stateToChange[e.target.id] = e.target.value;
//     this.setState(stateToChange)
//     this.toggle()
//   }

  render() {
    const { colorBoards } = this.state;
    return (
      <div className="AllColorBoards">
        <form class="form-inline my-2 my-lg-0">
          <input id="myInput" class="form-control mr-sm-2" value={this.state.colorSearch} onChange={this.dynamicSearch} type="search" placeholder="Search" aria-label="Search"></input>
          {/* <button class="btn btn-outline-primary my-2 my-sm-0" onClick={this.searchBtnEvt} type="submit">Search</button> */}
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