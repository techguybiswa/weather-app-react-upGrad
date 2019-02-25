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
      <div
      style={{textAlign: 'center'}}>
<input
									placeholder="Enter City Name..."
                                    value={this.state.cityName}
                                    style={{ fontSize: '24px' , background: '#FFFFFF', border: '1px solid #E5E5E5', color: '#8C8C99' , boxSizing: 'border-box', borderRadius: '4px', padding: '5px'}}
									onChange={e => this.updateCityName(e)}
								/>  
    <button 
       onClick={this.handleSearchInput}
       style={{ background: '#3251ED', color: 'white', fontSize: '27px',cursor: 'pointer'}}
      //  style={{ fontSize: '24px', textAlign: 'center', marginTop: '30px', backgroundColor: '#fff' , }}
        >Search</button>
      </div>
    );
  }
}
SearchBar.propTypes = {
    searchCity: PropTypes.func
  };
export default SearchBar;
