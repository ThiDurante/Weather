import React from 'react';

const WeatherCard = ({weather, index}) => {
  const day = weather.daily;

  return (
    <>
      <p>{day.time[index]}</p>
      <p>Sunrise at: {day.sunrise[index].slice(11)}</p>
      <p>Sunset at: {day.sunset[index].slice(11)}</p>
    </>
  );
};

export default WeatherCard;
