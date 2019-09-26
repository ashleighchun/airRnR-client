export const deleteBooking = (bookingId, tripId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/trips/${tripId}/bookings/${bookingId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(trip => dispatch({type: 'DELETE_BOOKING', payload: trip}))
  }
}
