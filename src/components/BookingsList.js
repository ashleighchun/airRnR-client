import React from 'react';
import {Link} from 'react-router-dom';


const bookingLink = (booking) =>
    <Link to={`bookings/${booking.id}`}>
        <button>{booking.name}</button>
    </Link>


const BookingsList = ( props ) =>
  <ul>
    {props.bookings.map((b, i) =>
      <li key={i}>
        {bookingLink(b)}
      </li>
    )}
  </ul>

export default BookingsList
