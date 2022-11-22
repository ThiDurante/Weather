import React, {useContext} from 'react';
import Search from '../components/Search';
import WeatherCard from '../components/WeatherCard';
import weatherContext from '../context/WeatherContext';
import './Home.css';

function Home() {
  const {weather, allCards} = useContext(weatherContext);
  console.log(weather);
  return (
    <main className="home-container">
      <h1 className="title">Welcome to Thiago Durante's Weather App!</h1>
      <Search />
      <section
        ref={allCards}
        className="allCards"
      >
        {!weather.error ? (
          weather.daily.time.map((day, index) => (
            <div
              className="card"
              key={day}
            >
              <WeatherCard
                weather={weather}
                index={index}
              />
            </div>
          ))
        ) : (
          <div>
            {weather.error === "Location doesn't exist" ? (
              <p>Location doesn't exist</p>
            ) : (
              'Type in a location'
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
