import React, {useContext, useState} from 'react';
import weatherContext from '../context/WeatherContext';
import './Login.css';

const Login = () => {
  const {user, setUser} = useContext(weatherContext);
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({name: userName, login: true});
  };

  const handleChange = ({target: {value}}) => {
    setUserName(value);
  };

  const logout = () => {
    setUser({name: '', login: false});
  };

  return user.login ? (
    <section className="login">
      <p>Welcome {user.name}</p>
      <p>Today will rain?</p>
      {/* ask user to set a home city, fetch for that city once set */}
      <p>Favorites</p>
      <h2>this part is not working yet :D</h2>
      <button
        type="button"
        onClick={logout}
      >
        Logout
      </button>
    </section>
  ) : (
    <form className="login">
      <h2>Login </h2>
      <input
        placeholder="username"
        type="text"
        name={userName}
        autoComplete="username"
        onChange={handleChange}
      />
      <input
        placeholder="password"
        type="password"
        autoComplete="current-password"
      />
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Enter
      </button>
    </form>
  );
};

export default Login;
