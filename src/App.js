import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import WeatherDetails from './components/weatherDetails.js';


class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoadingTemperature: null,
        cityName : null,
        cityTemperature: null,
        cityWeatherDescription: null,
        cityWind: null,
      }
    console.log("Constructor of WeatherApp class loaded.");
    this.searchCity = this.searchCity.bind(this);
  }

  searchCity(name) {
    this.setState({
      cityName: name,
    })

let that = this;

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+name+"&appid=80186bc6ef5c092a7aa7bcdb10ea8c80&units=metric")
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    if(response.cod === "404") {
        that.setState({
          isLoadingTemperature: false,
        })
        alert("City name not found. Please try again.");
      }
    else if(response.cod === 200) {
      console.log("Response from openweathermap api " , response);
      that.setState({
        isLoadingTemperature: true,
        cityTemperature: response.main.temp,
        cityWeatherDescription: response.weather[0].description,
        cityWind : response.wind.speed,
      })
    } 
  });
  }
  render() {
    let showTemperatureDetails  = this.state.isLoadingTemperature === true ? (
    <WeatherDetails 
    cityName={this.state.cityName} 
    cityTemperature={this.state.cityTemperature} 
    cityWeatherDescription = {this.state.cityWeatherDescription}
    cityWind = {this.state.cityWind}
    ></WeatherDetails>
    
    ) : (' ')
    return (
      <div>
       <h1>Weather App on ReactJs </h1>
       <SearchBar searchCity={this.searchCity}></SearchBar>
      {showTemperatureDetails}
      </div>
    );
  }
}

export default WeatherApp;
