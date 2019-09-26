import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: "none",
    color: 'white'
}

const Navigation = () =>
    (<div>
        <NavLink
            to='/'
            exact
            style={link}
            activeStyle={{
                background:'darkblue'
            }}
        >Home</NavLink>

        <NavLink
            to='/trips'
            exact
            style={link}
            activeStyle={{
                background:'darkblue'
            }}
        >Trips</NavLink>

        <NavLink
            to='/bookings'
            exact
            style={link}
            activeStyle={{
                background:'darkblue'
            }}
        >Bookings</NavLink>
    </div>)


export default Navigation;
