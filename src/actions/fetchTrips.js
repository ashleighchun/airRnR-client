
export function fetchTrips() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/vi/trips')
    .then(resp => resp.json())
    .then(trips => dispatch({
      type: 'FETCH_TRIPS',
      payload: trips
    }))
  }
}
