export const addBooking = (booking, tripId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/trips/${tripId}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking)
    })
    .then(response => response.json())
    .then(trip => {
        if (trip.error) {
          alert(trip.error)
        } else {
          dispatch({type: 'ADD_BOOKING', payload: trip})
        }
      }
    )
  }
}
