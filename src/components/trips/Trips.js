import React from 'react';
import TripInput from './TripInput'
import { Link } from 'react-router-dom'

const Trips = ({ trips }) => {

  const renderTrips = trips.map(trip=>
    <p key={trip.id}><Link  key={trip.id} to={`/trips/${trip.id}`}>{ trip.name }</Link></p>
  );
  return (
  <div>

    <h2>Add a new trip: </h2>
    <TripInput />

    <h2>-OR-</h2>
    <h2>View one of your saved trips: </h2>
    {renderTrips}


  </div>
)};

export default Trips;
