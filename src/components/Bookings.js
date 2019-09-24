import React from 'react'
import {connect} from 'react-redux'
import {deleteBooking} from '../actions/deleteBooking'

const Bookings = (props) => {

  console.log(props.bookings)
  const handleDelete = (booking) => {

   props.deleteBooking(booking.id, booking.trip_id)
 }

  return (
    <div>
      {props.bookings && props.bookings.map(booking =>
        <li key={booking.id}> {booking.booking_type} - {booking.cost} - {booking.start_date} - {booking.end_date} <button onClick={() => handleDelete(booking)}>Delete</button></li>
      )}
    </div>
  )
}


export default connect(null, {deleteBooking})(Bookings)
