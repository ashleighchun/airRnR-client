import React from 'react'

const Bookings = (props) => {

  consoe.log(props.bookings)

  return (
    <div>
      {props.bookings && props.bookings.map(transaction =>
        <li key={booking.id}> {booking.booking_type} - {booking.cost} - {booking.start_date} - {booking.end_date}</li>
      )}
    </div>
  )
}

export default Bookings
