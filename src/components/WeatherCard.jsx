import React from 'react';
import './WeatherCard.css';
import setImg from '../data/weatherIcons';
import {BsFillSunFill} from 'react-icons/bs';
import {BsFillMoonFill} from 'react-icons/bs';
import {FaTemperatureHigh} from 'react-icons/fa';
import {FaTemperatureLow} from 'react-icons/fa';
import {FiWind} from 'react-icons/fi';

const WeatherCard = ({weather, index}) => {
  const day = weather.daily;
  // const hourly = weather.hourly;
  console.log(weather);
  let img = setImg(day.weathercode[index]);

  return (
    <>
      {/* <p>Day: {day.time[index].slice(8)}</p>
      <p>
        <BsFillSunFill className="sunrise" /> {day.sunrise[index].slice(11)}
      </p>
      <p>
        <BsFillMoonFill className="sunset" /> {day.sunset[index].slice(11)}
      </p>
      <p>
        <FaTemperatureHigh className="temphigh" />{' '}
        {day.temperature_2m_max[index]}
      </p>
      <p>
        <FaTemperatureLow className="templow" /> {day.temperature_2m_min[index]}
      </p>
      <p>
        <FiWind className="wind" /> {day.windspeed_10m_max[index]} Km/h
      </p>
      <img
        className="img"
        src={img}
        alt="weather-icon"
      /> */}
      <div class="container">
        <div class="box">
          <span class="title">Day: {day.time[index].slice(8)}</span>
          <div>
            <img
              className="img"
              src={img}
              alt="weather-icon"
            />
            <strong>
              <FiWind className="wind" /> {day.windspeed_10m_max[index]} Km/h
            </strong>
            <p>
              <FaTemperatureHigh className="temphigh" />{' '}
              {day.temperature_2m_max[index]}{' '}
              <FaTemperatureLow className="templow" />{' '}
              {day.temperature_2m_min[index]}
            </p>
            <span>
              <BsFillSunFill className="sunrise" />{' '}
              {day.sunrise[index].slice(11)}
            </span>{' '}
            <span>
              <BsFillMoonFill className="sunset" />{' '}
              {day.sunset[index].slice(11)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
