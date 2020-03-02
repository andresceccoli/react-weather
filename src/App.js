import React from 'react';
import './App.css';
import WeatherBar from './WeatherBar';

function App() {
  let weathers = [
    {
      day: 'Jue',
      icon: 'day-sunny',
      max: 34,
      min: 22
    },
    {
      day: 'Vie',
      icon: 'day-cloudy',
      max: 32,
      min: 20
    },
    {
      day: 'Sab',
      icon: 'day-sleet',
      max: 33,
      min: 19
    },
    {
      day: 'Dom',
      icon: 'rain',
      max: 28,
      min: 17
    },
    {
      day: 'Lun',
      icon: 'day-sunny-overcast',
      max: 30,
      min: 18
    }
  ];

  return (
    <div className="App">
      <WeatherBar weathers={weathers} />
    </div>
  );
}

export default App;
