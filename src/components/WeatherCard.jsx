import React from 'react';
import setImg from '../data/weatherIcons';

const WeatherCard = ({weather, index}) => {
  const day = weather.daily;
  // const hourly = weather.hourly;
  console.log(weather);
  let img = setImg(day.weathercode[index]);

  return (
    <>
      <p>{day.time[index]}</p>
      <p>Sunrise: {day.sunrise[index].slice(11)}</p>
      <p>Sunset: {day.sunset[index].slice(11)}</p>
      <p>Max temperature: {day.temperature_2m_max[index]}</p>
      <p>Min temperature: {day.temperature_2m_min[index]}</p>
      <p>Max wind speed: {day.windspeed_10m_max[index]} Km/h</p>
      <img
        src={img}
        alt="weather-icon"
      />
    </>
  );
};

export default WeatherCard;
