export const getTrips = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_TRIPS'})
    return fetch('./trips')  //this fetch returns a promise object that can be pending, resolved, or caught for error
    .then(resp => resp.json())
    .then(trips => dispatch({type: "FETCH_TRIPS", payload: trips}))
  } //thunk returns two step thing so that we dont dispatch payload of fetch todos until the promise has been resolved
}

export const addTrip = (trip) => {
  return (dispatch) => {
    dispatch({type: "ADD_TRIP"}, trip)
    return fetch('/trips', {
      method: 'POST',
      body: JSON.stringify(trip),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(trip => dispatch({type: 'TRIP_ADDED', payload: trip}))
  }
}
