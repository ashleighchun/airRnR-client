export const getTrips = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_TRIPS'})
    return fetch('./trips')  //this fetch returns a promise object that can be pending, resolved, or caught for error
    .then(resp => resp.json())
    .then(trips => dispatch({type: "FETCH_TRIPS", payload: trips}))
  } //thunk returns two step thing so that we dont dispatch payload of fetch todos until the promise has been resolved
}
