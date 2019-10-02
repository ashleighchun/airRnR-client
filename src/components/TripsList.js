import React from 'react'
import { Link } from 'react-router-dom'

const tripLink = (trip) =>
    <Link to={`trips/${trip.id}`}>
        <button>{trip.name}</button>
    </Link>


const TripsList = (props) =>
<div>
    <ul>
        {props.trips.map((f, i) =>
            <li key={i}>
                {tripLink(f)}
                <br/>
            </li>
        )}
    </ul>
</div>


export default TripsList
