export const fetchBookings= ()=>{
   return (dispatch) => {
     dispatch({ type: 'LOADING_BOOKINGS' });
     return fetch('/api/bookings')
    .then(response => response.json())
     .then(bookings => dispatch({ type: 'FETCH_BOOKINGS', payload: bookings }));
  };
  //return fetch('/api/bookings').then(response=>response.json())
 }

 export const addBooking = (booking, tripId) => {

   return (dispatch) => {
     fetch(`http://localhost:3001/trips/${tripId}/bookings`, {
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

export const updateBooking = (data) => {
 return (dispatch) => {
 let body = JSON.stringify({data})
 return fetch('/api/bookings/' + data.booking.id, {
       method: 'PUT',
       body: body,
       headers: {
           'Content-Type': 'application/json'
       }
   }).then(res => res.json())
     .then(booking => dispatch({type: 'UPDATE_BOOKING_SUCCESS', payload: booking}));
 };
}


export const deleteBooking = (bookingId, tripId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/trips/${tripId}/bookings/${bookingId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(trip => dispatch({type: 'DELETE_BOOKING', payload: trip}))
  }
}
