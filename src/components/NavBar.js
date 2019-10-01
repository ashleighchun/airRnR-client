import React from 'react';
import { NavLink } from 'react-router-dom';

const link={
  width: '90px',
   padding: '10px',
   margin: '0',
   background: '#9c988f',
   textDecoration: 'none',
   fontFamily: 'Garamond',
   fontSize: 12,
   color: 'white'
}
const NavBar = () => {
  return (
    <div className="navbar">

    <NavLink to='/'
        exact
        style={link}
        activeStyle={{
          background: 'black'
        }}
      >Home</NavLink>

    <NavLink to='/books'
         exact
         style={link}
         activeStyle={{
            background: 'black'
        }}
     >Your Bookings</NavLink>

    <NavLink
         to='/books/new'
         exact
         style={link}
         activeStyle={{
            background: 'black'
        }}
     >Add a Booking</NavLink>

   </div>
    </div>
  );
};

export default NavBar;
