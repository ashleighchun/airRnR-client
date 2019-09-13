export const getTrips = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_TRIPS'})
    return fetch('./trips')
    .then(resp => resp.json())
    .then(trips => dispatch({type: "FETCH_TRIPS", payload: trips}))
  }
}
