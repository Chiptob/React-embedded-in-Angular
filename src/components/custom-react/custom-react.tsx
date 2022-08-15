import * as React from 'react';
import './custom-react.scss'

export interface WeatherInterface {
  city: string,
  country: string,
  date: Date,
  temperature: number,
  description: string,
}

export function CustomReact(props): any { 
  let weather: WeatherInterface = props.props;

  return (
    <div className='weather'>
      <h3>Aktuelles Wetter</h3>
      <p> {weather.city} {weather.country} </p>
      <p> {weather.date.toLocaleDateString()} </p>
      <p> {weather.temperature}°C</p>
      <p> {weather.description} </p>      
    </div>
  )
}

export function AngularButtonTest() {
  console.log("React");
  return (
    <div>
      <p>Button got pressed</p>
    </div>
  )
}