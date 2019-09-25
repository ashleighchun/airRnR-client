import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="App-nav">
      <NavLink className="App-nav-link"
        activeStyle={{ color: '#86B404' }}
        to="/"
        >
          About
        </NavLink>

      <NavLink className="App-nav-link"
        exact
        activeStyle={{ color: '#86B404' }}
        to="/trips"
      >
        My Trips
      </NavLink>

      <NavLink className="App-nav-link"
        activeStyle={{ color: '#86B404' }}
        to="/trips/new"
      >
        Create a New Trip
      </NavLink>

      

    </div>
  );
}

export default NavBar;
