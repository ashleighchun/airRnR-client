import React from 'react';
import { NavLink } from 'react-router-dom';

const link={
  color: 'blue',
  textDecoration: 'underline',
  padding: 5,
  margin: 5
}
const NavBar = () => {
  return (
    <div className="navbar">
    <NavLink to="/" activeStyle={link }>Home</NavLink>
    <NavLink to="/bookings" activeStyle={link}>Bookings</NavLink>
    <NavLink to="/trips" activeStyle={link}>Trips</NavLink>
    <NavLink to="/about" activeStyle={link}>About</NavLink>
    </div>
  );
};

export default NavBar;
