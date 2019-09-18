import React from 'react'
import Trip from './ShowTrip'

const Trips = (props) => {

  return (
    <div>
      {props.trips.map(trip =>
        <div key={trip.id}><Trip trip={trip}/> </div> )}
    </div>
  )
}

export default Trips
