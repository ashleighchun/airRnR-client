import React from 'react'

const Booking = (props) => (
      <div className="booking">
        <h1>My Booking: {props.booking.name}</h1>
          <p>Trip Type: {props.booking.trip_type}</p>
          <p>Booking Type: {props.booking.booking_type}</p>
          <p>Location: {props.booking.location}</p>
          <p>Start Date: {props.booking.start_date}</p>
          <p>End Date: {props.booking.end_date}</p>
          <p>Cost: {props.booking.cost}</p>
          <p>Details: {props.booking.details}</p>
        <button onClick={() => props.delete(props.booking.id)}>Delete Booking</button>
      </div>
)

export default Booking
