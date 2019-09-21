import React from 'react'
import {Route, Link} from 'react-router-dom'
import Trip from './Trip'

const Trips = (props) => {

  return (
    <div>
      {props.trips.map(trip =>
        <li key={trip.id}>
          <Link to={`/trips/${trip.id}`}>{trip.name}</Link>
        </li> )}
    </div>
  )
}

export default Trips
