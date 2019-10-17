import React, { Component } from 'react';
import { connect } from 'react-redux'


import BookingForm from '../components/BookingForm'
import { addBooking } from '../actions/bookings'

class NewBookingContainer extends Component {


  render() {
    return (
      <div className='new-bookings-container'>
        <h2>Add a New Booking!</h2>
        <BookingForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("FORM", state)
  return {
    bookings: state.bookingReducer.bookings
  }
}

export default connect(mapStateToProps, { addBooking })(NewBookingContainer)
