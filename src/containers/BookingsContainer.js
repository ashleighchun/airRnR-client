import React from 'react';
import { Route } from 'react-router-dom';
import Bookings from '../components/bookings/Bookings';
import Booking from '../components/bookings/Booking';

const BookingsContainer = ({ match, bookings}) => (
  <div>
    <Bookings bookings={bookings} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a Booking from the list.</h3>
    )}/>
    <Route path={`${match.url}/:bookingId`} render={routerProps => <Booking bookings={bookings} {...routerProps} /> }/>
  </div>
)

export default BookingsContainer;
