import React from 'react'
import Card from 'react-bootstrap/Card'


const BookingCard = props => {
  return (
      <div>
      <Card className="card-style">
        <Card.Img variant="top" src={props.booking.image} />
        <Card.Body>
          <Card.Title className="card-title-style">{props.booking.title}</Card.Title>
          <Card.Text>
          <h3>Create a new Booking</h3>
            <p>Booking Type: {props.booking.booking_type}</p>
            <p>Location: {props.booking.location}</p>
            <p>Cost: {props.booking.booking_cost}</p>
            <p>Start Date: {props.booking.start_date}</p>
            <p>End Date: {props.booking.end_date}</p>
            <p>Booking Details: {props.booking.details}</p>
            <button onClick={() => props.delete(props.booking.id)}>Delete Booking</button>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  )
}

export default BookingCard
