import React from 'react'
import Trip from './Trip'
import { Route, Link } from 'react-router-dom';

const Trips = (props) => {

  return (
    <div>
      <h2></h2>
      {props.trips.map(trip =>
        <li key={trip.id}>
        <Link to={`/trips/${trip.id}`}> {trip.name} </Link>
        </li>)}
    </div>

  )
}

export default Trips
