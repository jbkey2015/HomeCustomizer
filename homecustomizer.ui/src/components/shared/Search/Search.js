import './Search.scss';
import React from 'react';
import axios from 'axios';

class Search extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      query: this.props.query,
      results: [],
      loading: false,
      message: ''
    }
    
    this.cancel = '';
  }

  fetchSearchResults = (query) => {
    const searchUrl = `https://localhost:44334/api/colorBoard/${query}`;
    if (this.cancel) {
      // Cancel the previous request before making a new request
      this.cancel.cancel();
    }
    // Create a new CancelToken
    this.cancel = axios.CancelToken.source();
    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        console.warn(res);
        const resultNotFoundMsg = !res.data.length
          ? 'There are no more search results. Please try a new search.'
          : '';
        this.setState({
          results: res.data,
          message: resultNotFoundMsg,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: 'Failed to fetch results.Please check network',
          });
        }
      });
  };

  componentDidMount() {
    // const query = event.target.value;
    if ( this.state.query === '' ) {
      debugger
      this.props.toggle()
      this.setState({  results: {}, message: '' } );
    } else {
      this.setState({ loading: true, message: '' })
      this.fetchSearchResults(this.state.query);
      
    }
  };

  renderSearchResults = () => {
    const {results} = this.state;
    if (results.length > 0) {
      return (
        <div className="results-container">
          {results.map((result) => {
            return (
              <a key={result.colorBoard.id} href={result.imageUrl} className="result-items">
                <div className="image-wrapper">
                  <img className="image" src={result.imageUrl} alt=""/>
                </div>
              </a>
            );
          })}
        </div>
      );
    }else{
     return  <div>
        <p>nothing here</p>
      </div>
    }
  };

  render() {
    // const { query } = this.state;
    return (
      <div className="container">
        {/*Search Input*/}
        {/* <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            value={query}
            id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
          <i className="fa fa-search search-icon"/>
        </label> */}
        {/*Result*/}
        { this.renderSearchResults() }
      </div>
      )
  }
}

export default Search