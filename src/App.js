import { Route } from 'react-router-dom';
import Home from './pages/Home';
import WeatherProvider from './context/WeatherProvider';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <WeatherProvider>
      <Nav />
      <Header />
      <Route path="/" component={ Home } />
    </WeatherProvider>
  );
}

export default App;
