import React from 'react';



const Trip = (props) =>
    <div className='trip'>
        <h2>Trip Name: {props.trip.name}</h2>
        <p>Type of Trip: {props.trip.trip_type}</p>
        <p>Destination {props.trip.name}</p>
    </div>

export default Trip
