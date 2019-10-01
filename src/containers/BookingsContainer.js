import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Bookings from '../components/bookings/Bookings';
import Booking from '../components/bookings/Booking';
import TripsContainer from './TripsContainer';

import { deleteBooking } from '../actions/bookingActions';

const BookingsContainer = ({ match, bookings}) => (
  <div>
    <Bookings bookings={bookings} />

    <h3>-OR-</h3>
    <Route exact path={match.url} render={() => (
      <h2>Select a Booking from the list:</h2>
    )}/>
    <Route path={`${match.url}/:bookingId`} render={routerProps => <Booking bookings={bookings} {...routerProps} /> }/>
  </div>
)

export default BookingsContainer;
