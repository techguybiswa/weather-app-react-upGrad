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
                  // style={{background: '#FFFFFF',  padding: '10px', marginTop: '10px'   , marginLeft: '20%',  marginRight: '20%'}}

                  style={{ fontSize: '28px' ,width: '600px', background: '#FFFFFF', boxShadow: '0px 4px 32px rgba(143, 143, 143, 0.4)', borderRadius: '4px', border: '1px solid #E5E5E5', color: '#8C8C99' , boxSizing: 'border-box', borderRadius: '4px', padding: '5px'}}
									onChange={e => this.updateCityName(e)}
								/>  
    <button 
       onClick={this.handleSearchInput}
       style={{ background: '#3251ED', color: 'white', fontSize: '33px',cursor: 'pointer' , boxShadow: '0px 4px 32px rgba(143, 143, 143, 0.4)', borderRadius: '4px',}}
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
