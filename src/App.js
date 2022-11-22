import { Route } from 'react-router-dom';
import Home from './pages/Home';
import WeatherProvider from './context/WeatherProvider';
import Nav from './components/Nav';
import Tech from './pages/Tech';
import Dev from './pages/Dev';
import Login from './components/Login';

function App() {
  return (
    <WeatherProvider>
      <Nav />
      <Route exact path="/" component={ Home } />
      <Route exact path="/tech" component={ Tech } />
      <Route exact path="/dev" component={ Dev } />
      <Login />
    </WeatherProvider>
  );
}

export default App;
