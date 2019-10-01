import React from 'react'
import BookingForm from './BookingForm'


const Booking = ({match, bookings}) => {
  const id = match.params.bookingId -1;
  const booking = bookings[id]
  return (
    <div className="bookingCard" key={booking.id}>
    <p>Booking Type: {booking.booking_type}</p>
    <p>Cost: {booking.cost}</p>
    <p>Notes: {booking.notes} </p>

    <BookingForm booking={booking} />
  </div>
)
}

export default Booking;
