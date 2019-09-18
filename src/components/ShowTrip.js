import React from 'react'

const Trip = (props) => {


  let trip = props.trips[props.match.params.id -1]
  
  return (
    <li>
      {trip ? trip.name : null}
    </li>
  )

}

export default Trip
