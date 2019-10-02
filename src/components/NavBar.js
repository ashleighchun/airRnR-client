import React from 'react';
import { NavLink } from 'react-router-dom';

const link={
  width: '90px',
   padding: '10px',
   margin: '0',
   background: '#9c988f',
   textDecoration: 'none',
   fontFamily: 'Typewriter',
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

      <NavLink to='/bookings'
           exact
           style={link}
           activeStyle={{
              background: 'black'
          }}
       >My Bookings</NavLink>

    <NavLink to='/bookings/new'
         exact
         style={link}
         activeStyle={{
            background: 'black'
        }}
     >Add a new Booking</NavLink>


   </div>
  );
};

export default NavBar;
