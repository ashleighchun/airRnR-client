import React from 'react';
import { Route } from 'react-router-dom';
import Trips from '../components/trips/Trips';
import Trip from '../components/trips/Trip';

const TripsContainer = ({ match, trips }) => (
  <div>
    <Trips trips={trips} />
    <Route exact path={match.url} render={() => (
      <h3>To view details about a particular trip, select one of the trip links above.</h3>
    )}/>
    <Route path={`${match.url}/:tripId`} render={routerProps => <Trip trips={trips} {...routerProps} /> }/>
  </div>
)

export default TripsContainer;
