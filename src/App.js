import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import WeatherDetails from './components/weatherDetails.js';


class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cityNameFound: null,
        cityNameError: false,
        loadingIndicator: false,
        cityName : null,
        cityTemperature: null,
        cityWeatherDescription: null,
        cityWind: null,
        citySunrise: null,
        citySunset:  null
      }
    console.log("Constructor of WeatherApp class loaded.");
    this.searchCity = this.searchCity.bind(this);
  }

  searchCity(name) {
    this.setState({
      cityName: name,
      cityNameFound: false,
    })

let that = this;

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+name+"&appid=80186bc6ef5c092a7aa7bcdb10ea8c80&units=metric")
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    if(response.cod === "404") {
        that.setState({
          cityNameFound: false,
          cityNameError: true
        })
      }
    else if(response.cod === 200) {
      console.log("Response from openweathermap api " , response);
      let sunrise =  new Date(response.sys.sunrise).toLocaleTimeString();
      let sunset =  new Date(response.sys.sunset).toLocaleTimeString();
      console.log("sunrise " ,sunrise);

      // sunrise = sunrise.getTime();
      // sunset = sunset.getTime();
      // sunrise = sunrise.split(' ');
      // sunrise = sunrise[0];
      // sunset = sunset.split(' ');
      // sunset = sunset[0];

      // cityWeatherDescription = response.weather[0].description
      that.setState({
        cityNameFound: true,
        cityNameError: false,

        cityTemperature: response.main.temp,
        cityWeatherDescription: response.weather[0].description,
        cityWind : response.wind.speed,
        citySunrise: sunrise,
        citySunset: sunset

      })

    } 
  });
  }
  render() {
    let showErrorMessage = this.state.cityNameError === true ? (
      <div>
        <h4>City Name not found</h4>
      </div>
    ) : (' ')
    let showTemperatureDetails  = this.state.cityNameFound === true ? (
    <WeatherDetails 
    cityName={this.state.cityName} 
    cityTemperature={this.state.cityTemperature} 
    cityWeatherDescription = {this.state.cityWeatherDescription}
    cityWind = {this.state.cityWind}
    citySunset = {this.state.citySunset}
    citySunrise = {this.state.citySunrise}

    ></WeatherDetails>
    
    ) : (' ')
    return (
      <div>
       <h1>Weather App on ReactJs </h1>
       <SearchBar searchCity={this.searchCity}></SearchBar>
       {showErrorMessage}
      {showTemperatureDetails}
      </div>
    );
  }
}

export default WeatherApp;
