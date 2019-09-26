export const addTrip = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3001/trips', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(trip => dispatch({type: 'ADD_TRIP', payload: trip}))
  }

}
