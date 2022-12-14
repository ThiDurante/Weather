import React, {useContext, useEffect, useState} from 'react';
import weatherContext from '../context/WeatherContext';
import './Search.css';
import {SlMagnifier} from 'react-icons/sl';

const Search = () => {
  const {setLocation, setWeather, weather, allCards} =
    useContext(weatherContext);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState('');
  console.log(searchResult);
  const getCity = async () => {
    try {
      const request = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchValue}`
      );
      const data = await request.json();
      if (data.results) {
        setSearchResult(data.results[0]);
      } else {
        const allCardsEle = allCards.current;
        setWeather({error: "Location doesn't exist"});
        allCardsEle.className = 'allCards';
      }
    } catch (error) {
      setSearchResult(error);
    }
  };

  useEffect(() => {
    if (searchResult.longitude) {
      setLocation({
        latitude: searchResult.latitude,
        longitude: searchResult.longitude,
        timezone: searchResult.timezone,
      });
    } else {
      setLocation('');
    }
  }, [searchResult, setLocation]);

  return (
    <section className="search">
      <div>
        <label htmlFor="search">
          <SlMagnifier className="magnifier" />
          <input
            placeholder="City"
            className="search-input"
            type="text"
            name="search"
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
        <button
          className="search-btn"
          type="button"
          onClick={getCity}
        >
          Check Weather
        </button>
      </div>
      {searchResult.admin1 && weather.daily && (
        <p className="searched-city">
          {searchResult.admin2 ? `${searchResult.admin2} - ` : null}
          {searchResult.admin1} - {searchResult.country}
        </p>
      )}
    </section>
  );
};

export default Search;
