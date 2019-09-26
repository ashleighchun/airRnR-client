export const editTrip = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/trips/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(trip => dispatch({type: 'EDIT_TRIP', payload: trip}))
  }

}
