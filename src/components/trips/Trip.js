import React from 'react'

const Trip = ({match, trips}) => {

  const id = match.params.tripId - 1;
  const trip = match.params

  return (
    <div key={id}>
    <p>Trip Name: {trip.name} </p>
    <p>Type of Trip: {trip.trip_type} </p>
    <p>Location: {trip.location} </p>
    <p>Start Date: {trip.start_date} </p>
    <p>End Date: {trip.end_date} </p>
    <p>Budget: {trip.budget} </p>
    <p>Details: {trip.details} </p>
  </div>
)
}

export default Trip;
