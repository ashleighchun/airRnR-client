import React from 'react'
import {Redirect} from 'react-router-dom'
import BookingsContainer from '../containers/BookingsContainer'

const Trip = (props) => {


  let trip = props.trips[props.match.params.id - 1]
console.log(trip)
  return (
    <div>
      <h2>
        {trip ? null : <Redirect to='/trips'/>}
        {trip ? trip.name : null}
      </h2>
      <BookingsContainer/>
    </div>
  )

}

export default Trip
