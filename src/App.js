import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import WeatherDetails from './components/weatherDetails.js';
import NavBar from './components/navbar.js'

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
        cityHumidity: null,
        cityMaxTmp: null,
        cityMinTmp: null,
        cityPressure: null,
        // citySunrise: null,
        // citySunset:  null,

      }
    console.log("Constructor of WeatherApp class loaded.");
    this.searchCity = this.searchCity.bind(this);
  }

  searchCity(name) {
    this.setState({
      cityNameFound: false,
      loadingIndicator: true,
      cityNameError: false
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
          cityNameError: true,
          loadingIndicator: false
        })
      }
    else if(response.cod === 200) {
      console.log("Response from openweathermap api " , response);
      // let sunrise =  new Date(response.sys.sunrise).toLocaleTimeString();
      // let sunset =  new Date(response.sys.sunset).toLocaleTimeString();
      // console.log("sunrise " ,sunrise);

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
        cityName: response.name,
        cityTemperature: response.main.temp,
        cityWeatherDescription: response.weather[0].main,
        cityWind : response.wind.speed,
        cityHumidity: response.main.humidity,
        cityMaxTmp: response.main.temp_max,
        cityMinTmp: response.main.temp_min,
        cityPressure: response.main.pressure,
        loadingIndicator: false

        // citySunrise: sunrise,
        // citySunset: sunset

      })

    } 
  });
  }
  render() {
    let showErrorMessage = this.state.cityNameError === true ? (
      <div
      style={{background: '#FFFFFF',  color: 'grey', textAlign:'center', boxShadow: '0px 4px 32px rgba(143, 143, 143, 0.4)', borderRadius: '4px', padding: '10px', marginTop: '10px' ,  paddingBottom: '10px'  , marginLeft: '30%',  marginRight: '30%'}}
      >
        <h4>City Name not found</h4>
      </div>
    ) : (''
    )
    let showTemperatureDetails  = this.state.cityNameFound === true ? (
    <WeatherDetails 
    cityName={this.state.cityName} 
    cityTemperature={this.state.cityTemperature} 
    cityWeatherDescription = {this.state.cityWeatherDescription}
    cityWind = {this.state.cityWind}
    cityHumidity = {this.state.cityHumidity}
    cityMaxTmp = {this.state.cityMaxTmp}
    cityMinTmp = {this.state.cityMinTmp}
    cityPressure = {this.state.cityPressure}
    // citySunset = {this.state.citySunset}
    // citySunrise = {this.state.citySunrise}

    ></WeatherDetails>
    
    ) : (
      this.state.loadingIndicator === true ? (
        <div
      style={{background: '#FFFFFF',  color: 'grey', textAlign:'justify', boxShadow: '0px 4px 32px rgba(143, 143, 143, 0.4)', borderRadius: '4px', padding: '10px', marginTop: '10px' ,  paddingBottom: '10px'  , marginLeft: '30%',  marginRight: '30%'}}
      >
        <h4>Searching City name...</h4>
      </div>
      ) : (' ')
    )
    return (
      <div>
        <NavBar></NavBar>
        <br/>
       {/* <p style={{fontFamily: 'Roboto,sans-serif', fontSize: '34px', color: '#505050', textAlign : 'center'}}>Weather App on ReactJs </p> */}
       <SearchBar searchCity={this.searchCity} ></SearchBar>
       {showErrorMessage}
      {showTemperatureDetails}
      </div>
    );
  }
}

export default WeatherApp;
