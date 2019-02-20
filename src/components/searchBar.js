import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName : null,
            }
        this.handleSearchInput = this.handleSearchInput.bind(this);
      }
      updateCityName(e) {
        this.setState({ cityName: e.target.value })
      }
handleSearchInput() {

    console.log('handleSearchInput fired');
    this.props.searchCity(this.state.cityName);
}
  render() {
    return (
      <div>
<input
									placeholder="Enter City Name..."
                                    value={this.state.cityName}
                                    style={{ fontSize: '24px' }}
									onChange={e => this.updateCityName(e)}
								/>   
                                    
<br/>
    <button 
       onClick={this.handleSearchInput}
       style={{ fontSize: '24px', textAlign: 'center', color: 'white' , background: 'blue' ,marginTop: '30px'}}
        >Search</button>
      </div>
    );
  }
}
SearchBar.propTypes = {
    searchCity: PropTypes.func
  };
export default SearchBar;
