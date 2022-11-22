import React from 'react';
import {useHistory} from 'react-router-dom';

const Nav = () => {
  let history = useHistory();
  return (
    <nav className="nav">
      <button
        type="button"
        onClick={() => history.push('/')}
      >
        Search
      </button>
      <button
        type="button"
        onClick={() => history.push('/tech')}
      >
        Tech Used
      </button>
      <button
        type="button"
        onClick={() => history.push('/tech')}
      >
        Who is the Dev?
      </button>
    </nav>
  );
};

export default Nav;
