import React from 'react'
import {Redirect} from 'react-router-dom'
import TripEdit from './TripEdit'
import BookingsContainer from '../containers/BookingsContainer'

const Trip = (props) => {


  let trip = props.trips.filter(trip => trip.id == props.match.params.id)[0]
  console.log(trip)
  return (
    <div>
      <h2>
        {trip ? trip.name : null}
      </h2>
      <BookingsContainer trip={trip}/>
      <TripEdit trip={trip}/>
    </div>
  )

}

export default Trip
