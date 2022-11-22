import React from 'react';
import {useHistory} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  let history = useHistory();
  return (
    <nav className="nav">
      <button
        className="nav-btn-dark"
        type="button"
        onClick={() => history.push('/')}
      >
        Search
      </button>
      <button
        className="nav-btn-dark"
        type="button"
        onClick={() => history.push('/tech')}
      >
        Who is the Dev?
      </button>
      <button
        className="nav-btn-dark"
        type="button"
        onClick={() => history.push('/tech')}
      >
        Tech Used
      </button>
    </nav>
  );
};

export default Nav;
