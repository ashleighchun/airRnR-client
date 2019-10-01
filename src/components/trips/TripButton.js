import React from 'react'

const TripButton = props => (<button id={props.trip.id} onClick={props.handleThisClick}>{props.trip.trip_type}</button>)

export default TripButton
