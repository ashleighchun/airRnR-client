export const fetchBookings= () => {
   return (dispatch) => {
     dispatch({ type: 'LOADING_BOOKINGS' });
     return fetch('http://localhost:3001/api/bookings')
    .then(response => response.json())
     .then(bookings => dispatch({ type: 'FETCH_BOOKINGS', payload: bookings }));
  };
  //return fetch('/api/bookings').then(response=>response.json())
 }

 //export const addBooking = (booking, tripId) => {
   //console.log("New booking action", booking)
   //return (dispatch) => {
    //dispatch({ type: "ADD_BOOKING", booking })
    //return fetch('http://localhost:3001/api/trips/${tripId}/bookings', {
      //method: 'POST',
      //body: JSON.stringify(booking),
      //headers: {
        //'Content-Type': 'application/json',
        //'Accept': 'application/json'
      //}
    //})
     //.then(response => response.json())
     //.then(trip => {
        // if (trip.error) {
        //   alert(trip.error)
         //} else {
        //   dispatch({type: 'ADD_BOOKING', payload: trip})
        // }
//}
    // )
   //}
 //}

export const updateBooking = (data) => {
 return (dispatch) => {
 let body = JSON.stringify({data})
 return fetch('http://localhost:3001/api/bookings/' + data.booking.id, {
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
