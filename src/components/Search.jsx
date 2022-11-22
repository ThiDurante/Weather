import React, {useContext, useEffect, useState} from 'react';
import weatherContext from '../context/WeatherContext';

const Search = () => {
  const {setLocation} = useContext(weatherContext);
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
        setSearchResult({Error: "Location doesn't exist"});
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
    <section>
      <label htmlFor="search">City</label>
      <input
        type="text"
        name="search"
        id="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="button"
        onClick={getCity}
      >
        Check Weather
      </button>
      {searchResult.admin1 && (
        <p>
          {searchResult.admin2 ? `${searchResult.admin2} -` : null}
          {searchResult.admin1} - {searchResult.country}
        </p>
      )}
    </section>
  );
};

export default Search;
