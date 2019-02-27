import React, { Component } from 'react';
import AddComment from './addComments'
class WeatherDetails extends Component {
    constructor(props) {
        super(props);
        
      }

  render() {
    let dateNow = new Date();
    let weatherIcon = "http://openweathermap.org/img/w/" + this.props.weatherIcon + ".png"
    return (
   <div>
        <div
      style={{background: '#FFFFFF', boxShadow: '0px 4px 32px rgba(143, 143, 143, 0.4)', borderRadius: '4px', padding: '10px', marginTop: '10px'   , marginLeft: '15%',  marginRight: '15%'}}
      >
      <span
       style={{ fontSize: '20px', color: '#505050' }}>

       {this.props.cityName}, {this.props.cityCountry},  {dateNow.toDateString()} 
      </span>
    <br/>
      <div
      style={{display: 'flex',flexDirection: 'row'}}>
      <div
      style={{  width: '60%' , paddingLeft: '5%', paddingTop: '58px'}}>
             <h1> <span  style={{ color: '#505050', fontSize: '100px' }}> {this.props.cityTemperature}&deg;C               <img src={weatherIcon}/>
</span> </h1>
      </div>
      <div
      style={{  width: '40%', paddingTop: '30px'}}>
        <p style={{color: '#505050', marginTop:'-25px', fontSize: '22px'}}>
         Weather: <b>{this.props.cityWeatherDescription}</b><br/>
         Wind:  <b>{this.props.cityWind} km/hr</b> 
        <br/>
        <br/>
        Humidity: <b>{this.props.cityHumidity}%</b> <br/>
        Pressure: <b> {this.props.cityPressure} Pa</b>
       <br/>
       <br/>
         Max Temp: <b>{this.props.cityMaxTmp}&deg;C </b><br/>
         Min Temp: <b>{this.props.cityMinTmp}&deg;C</b>
        <br/> <br/>
        Sunrise : <b> {this.props.citySunrise}</b><br/>
        Sunset: <b> {this.props.citySunset}</b>
       <br/>
        </p>

      </div>
      </div>
      </div>
      <div
      style={{background: '#FFFFFF', boxShadow: '0px 4px 32px rgba(143, 143, 143, 0.4)', borderRadius: '4px', padding: '10px', marginTop: '10px' ,  paddingBottom: '10px'  , marginLeft: '15%',  marginRight: '15%'}}

      >
               <AddComment></AddComment>
      
      </div>
      <br/>
      <br/>
   </div>
    );
  }
}
export default WeatherDetails;
