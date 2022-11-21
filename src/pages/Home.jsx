import React, {useContext} from 'react';
import Search from '../components/Search';
import WeatherCard from '../components/WeatherCard';
import weatherContext from '../context/WeatherContext';

function Home() {
  const {weather} = useContext(weatherContext);
  console.log(weather);
  return (
    <main>
      <h1>Welcome to Thiago Durante's Weather App!</h1>
      <Search />
      <section className="all-cards">
        {Object.keys(weather).length > 0
          ? weather.daily.time.map((day, index) => (
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
          : null}
      </section>
    </main>
  );
}

export default Home;
