export const addBooking = (booking, tripId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },

      body: JSON.stringify(booking)
    })
    .then(response => response.json())
    .then(trip => dispatch({type: 'ADD_BOOKING', payload: trip}))
  }

}
