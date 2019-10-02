import React from 'react'

const Booking = props => {
  return (
      <div className="booking">
        <h1 className="details">{props.booking.details}</h1>
          <p>Booking Type: {props.booking.booking_type}</p>
          <p>Location: {props.booking.location}</p>
          <p>Start Date: {props.booking.location}</p>
          <p>End Date: {props.booking.location}</p>
          <p>Cost: {props.booking.location}</p>
        <button onClick={() => props.delete(props.booking.id)}>Delete Book</button>
      </div>
  )
}

export default Booking
