import React from 'react'
import BookingInput from '../components/BookingInput'
import Bookings from '../components/Bookings'

class BookingsContainer extends React.Component {

  render() {

    return (
      <div>
        <BookingInput/>
        <Bookings bookings={this.props.trip && this.props.trip.bookings}/>
      </div>
    )
  }
}

export default BookingsContainer
