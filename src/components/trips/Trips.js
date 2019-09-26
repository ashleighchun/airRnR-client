import React from 'react';
import TripInput from './TripInput'
import { Link } from 'react-router-dom'

const Trips = ({ trips }) => {
  const renderTrips = trips.map(trip=>
    <p key={trip.id}><Link  key={trip.id} to={`/trips/${trip.id}`}>{ trip.name }</Link></p>
  );
  return (
  <div>
    <h1>Trips </h1>
    {renderTrips}
    <TripInput />
  </div>
)};

export default Trips;
