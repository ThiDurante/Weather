import { useEffect, useState } from 'react';
import WeatherContext from './WeatherContext';

export default function WeatherProvider({ children }) {
  // states or functions to be exported
  const [user, setUser] = useState({login: false})
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState('')

  useEffect(() => {
    if (location.latitude) {
      const getWeather = async () => {
        const request = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation,rain&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=${location.timezone}`)
        const data = await request.json()
        setWeather(data)
      }
      getWeather()
    }
  }, [location])
  


  return (<WeatherContext.Provider value={{ user, setUser, location, setLocation, weather }}>
  <div>{ children }</div>
  </WeatherContext.Provider>)
}
