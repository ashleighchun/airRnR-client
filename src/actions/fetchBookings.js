import fetch from 'isomorphic-fetch';

export function fetchBookings() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BOOKINGS' })
  return fetch('api/bookings', {
    accept: 'application/json',
  })
  .then(response => { return response.json()})
  .then(responseJSON => {return responseJSON})
  .then(bookings => dispatch({ type: 'FETCH_BOOKINGS', payload: bookings }))
}
}
