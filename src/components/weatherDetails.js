import React, { Component } from 'react';
import AddComment from './addComments'
class WeatherDetails extends Component {
    constructor(props) {
        super(props);
      }

  render() {
    return (
      <div>
       <h1> <span  style={{ color: '#505050', fontSize: '100px' }}> {this.props.cityTemperature} C </span> </h1>
       <p style={{color: '#505050', textAlign: 'center', marginTop:'-35px', fontStyle: 'italic'}}>
        {this.props.cityWeatherDescription} with {this.props.cityWind} km/hr wind speed
        <br/>
        Sunrise: {this.props.citySunrise} Sunset: {this.props.citySunset}
        </p>

       <AddComment></AddComment>
      </div>
    );
  }
}
export default WeatherDetails;
