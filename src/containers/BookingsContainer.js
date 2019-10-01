import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBookinging } from '../actions/bookingingActions';
import BookingCard from '../components/bookingings/BookingCard';
import TripsContainer from './TripsContainer';

class BookingingsContainer extends Component {
  state = {
      tripFilter: "all"
    }  handleOnClick = (event) => {
    console.log("It works", event.target)
    this.setState({
      tripFilter: event.target.id
    })
  }

  filteredBookings = (bookings) => {
    if (this.state.tripFilter === "all") {
      return bookings
    } else {
      return bookings.filter(booking => this.state.tripFilter === booking.trip_id.toString())
    }
  }

  render(){

    const bookings = this.filteredBookings(this.props.bookings).map(booking => <BookingCard key={booking.id} booking={booking} delete={this.props.deleteBooking} /> )

    return (
      <div>
        <br/>
        <h1>Booking List</h1>
        <TripsContainer handleClick={this.handleOnClick} />
        <br/>
        <div class="flex-container">
          {console.log("bookings", bookings)}
          {this.props.loading ? <h3>Loading...</h3> : bookings }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookings: state.bookingReducer.bookings,
    loading: state.bookingReducer.loading
  }
}

export default connect(mapStateToProps, { deleteBooking } )(BookingsContainer)
