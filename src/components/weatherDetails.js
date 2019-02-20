import React, { Component } from 'react';

class WeatherDetails extends Component {
    constructor(props) {
        super(props);
      }

  render() {
    return (
      <div>
       <h1>Temperature in {this.props.cityName} is: {this.props.cityTemperature} C </h1>
       <h3>{this.props.cityWeatherDescription} with {this.props.cityWind} km/hr wind speed</h3>
      </div>
    );
  }
}
export default WeatherDetails;
