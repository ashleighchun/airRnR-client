

import React from 'react'
import { Link } from 'react-router-dom'
import BookingForm from './BookingForm'

const Bookings= ({bookings}) => {
  const renderBookings = bookings.map(booking =>
    <p key={booking.id}><Link  key={booking.id} to={`/bookings/${booking.id}`}>{ booking.booking_type }</Link></p>
  );
  return (
    <div className="bookingsContainer">
    <h2>Add a new Booking: </h2>
      <BookingForm />

      {renderBookings}
    </div>
  )
}

export default Bookings;
