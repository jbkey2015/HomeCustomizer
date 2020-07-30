import './HomeCustomizer.scss';
import React from 'react';
import $ from 'jquery';
import colorBoardData from '../../../helpers/data/colorBoardData';
import ColorBoard from '../../shared/ColorBoard/ColorBoard';

class HomeCustomizer extends React.Component {
  state = {
    colorBoards: [],
    //colorSearch: "",
    //resultSearch: [],
    wantsToSearch: false,
    toggleMainContainer:false,
    query: ''
  }

  colorFilter = (query) => {
    const value = $(query.target).val().toLowerCase();
    const colors = $(`https://localhost:44334/api/colorBoard/${query}`);
    colors.hide();
    if (value !== '') {
      colors.filter(this.colorBoards).show();
      console.warn(this.colorBoards);
    } else {
      colors.show();
    }
  };
  
  searchFilter = () => {
    $('#myInput').on('keyup', (e) => {
      this.colorFilter(e);
    });
  };

  componentDidMount() {
    colorBoardData.getAllColorBoards()
      .then((colorBoards) => this.setState({ colorBoards }))
      .catch((err) => console.error('error from get all color boards', err));
  }
  
  // searchBtnEvt = (event) => {
  //   //logic
  //   event.preventDefault();

  //   console.log(this.state.colorSearch)
  //   if(this.state.colorSearch !== ''){
      
  //     const filteredColorBoards = this.state.colorBoards.filter(cBoard => {
  //       return cBoard.sidingColor.toLowerCase().includes(this.state.colorSearch.toLowerCase()) ||  cBoard.shutterColor.toLowerCase().includes(this.state.colorSearch.toLowerCase())
  //     });
  //     this.setState({resultSearch: filteredColorBoards, wantsToSearch: true});
  //   }
  // }


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
        <div id="searchForm">
          <div className="container">
            <form className="form-row">
              <div className="col">
              <input id="myInput" className="form-control" type="search" placeholder="Search Colors"/>
              </div>
            </form>
          </div>
        </div>
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