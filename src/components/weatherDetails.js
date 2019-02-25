import React, { Component } from 'react';
import AddComment from './addComments'
class WeatherDetails extends Component {
    constructor(props) {
        super(props);
        
      }

  render() {
    let dateNow = new Date();
    return (
   <div>
        <div
      style={{background: '#FFFFFF', boxShadow: '0px 4px 32px rgba(143, 143, 143, 0.4)', borderRadius: '4px', padding: '10px', marginTop: '10px'   , marginLeft: '30%',  marginRight: '30%'}}
      >
      <span
       style={{ fontSize: '20px', color: '#505050' }}>
       {this.props.cityName} , {dateNow.toDateString()}
      </span>
    <br/>
      <div
      style={{display: 'flex',flexDirection: 'row'}}>
      <div
      style={{  width: '60%' , paddingLeft: '5%'}}>
             <h1> <span  style={{ color: '#505050', fontSize: '73px' }}> {this.props.cityTemperature}&deg;C </span> </h1>

      </div>
      <div
      style={{  width: '40%', paddingTop: '30px'}}>
        <p style={{color: '#505050', marginTop:'-25px', fontSize: '20px'}}>
        Weather: <b>{this.props.cityWeatherDescription}</b>
        <br/>
         Wind:  <b>{this.props.cityWind} km/hr</b> 
        <br/>
        Max Temp: <b>{this.props.cityMaxTmp}&deg;C </b>
        <br/>
         Min Temp: <b>{this.props.cityMinTmp}&deg;C</b>
        <br/>
       Humidity: <b>{this.props.cityHumidity}%</b> 
       <br/>
       Pressure: <b> {this.props.cityPressure}Pa</b>

        {/* <img src="http://openweathermap.org/img/w/50d.png"/> */}

        </p>

      </div>
      </div>
      </div>
      <div
      style={{background: '#FFFFFF', boxShadow: '0px 4px 32px rgba(143, 143, 143, 0.4)', borderRadius: '4px', padding: '10px', marginTop: '10px' ,  paddingBottom: '10px'  , marginLeft: '30%',  marginRight: '30%'}}

      >
               <AddComment></AddComment>

      </div>
   </div>
    );
  }
}
export default WeatherDetails;
