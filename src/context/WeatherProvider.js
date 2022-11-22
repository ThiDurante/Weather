import { useEffect, useRef, useState } from 'react';
import WeatherContext from './WeatherContext';

export default function WeatherProvider({ children }) {
  // states or functions to be exported
  const [user, setUser] = useState({login: false})
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState({error: true})
  const allCards = useRef(null);


  useEffect(() => {
    const allCardsEle = allCards.current
    if (location.latitude) {
      const getWeather = async () => {
        const request = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=${location.timezone}`)
        const data = await request.json()
        setWeather(data)
        allCardsEle.className = 'active'
      } 
      getWeather()
    } else {
    setWeather({ error: "true"})

  }
  }, [location])
  


  return (<WeatherContext.Provider value={{ user, setUser, location, setLocation, weather, allCards, setWeather }}>
  <div>{ children }</div>
  </WeatherContext.Provider>)
}
