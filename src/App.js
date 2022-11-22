import { Route } from 'react-router-dom';
import Home from './pages/Home';
import WeatherProvider from './context/WeatherProvider';
import Header from './components/Header';
import Nav from './components/Nav';
import Tech from './pages/Tech';
import Dev from './pages/Dev';

function App() {
  return (
    <WeatherProvider>
      <Nav />
      <Header />
      <Route exact path="/" component={ Home } />
      <Route exact path="/tech" component={ Tech } />
      <Route exact path="/dev" component={ Dev } />
    </WeatherProvider>
  );
}

export default App;
