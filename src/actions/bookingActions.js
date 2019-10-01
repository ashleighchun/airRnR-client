export const fetchBookings = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_BOOKINGS'})
    return fetch('/bookings')
    .then(resp => resp.json()) //turns resp into json
    .then(bookings => dispatch({type:'FETCH_BOOKINGS', payload: bookings}))
  }
}

export const deleteBooking = (id) => {
  return (dispatch) => {
    dispatch({type: 'DELETE_BOOKING'}, id)
    return fetch(`/bookings/${id}`, {
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(dispatch({type:'BOOKING_DELETED', id}))
  }
}

export const addBooking = (booking) => {
  return (dispatch) => {
    dispatch({type: 'ADD_BOOKING'}, booking)
    return fetch('/bookings', {
      method:'POST',
      body: JSON.stringify(booking),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(booking => dispatch({type:'BOOKING_ADDED', payload: booking}))
  }
}
