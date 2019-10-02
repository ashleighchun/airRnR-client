import React from 'react';


const BookingsList = (props) =>
    <ul>
        {props.bookings.sort((a, b) => (a.start_date < b.start_date) ? 1 : -1).map((m, i) =>
            <li key={i}>
                <button id={m.id} onClick={props.handleOnClick}> X </button> <br/>
                <p>Booking Type: {m.booking_type}</p>
                <p>Cost: {m.booking_cost}</p>
                <p>Details: {m.details}</p>
            </li>
        )}
    </ul>

export default BookingsList
