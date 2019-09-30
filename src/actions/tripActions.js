export const fetchTrips= () => {
  return (dispatch) => {
  dispatch({ type: 'LOADING_TRIPS' });
  return fetch('http://localhost:3001/api/trips')
  .then(response => response.json())
  .then(trips => dispatch({ type: 'FETCH_TRIPS', payload: trips }));
  };
  //  return fetch('/api/trips').then(response=>response.json());
};


export const addTrip = trip => {
console.log("new trip action", action)
  return (dispatch) => {
    return fetch('http://localhost:3001/api/trips', {
      method: 'POST',
      body: JSON.stringify(trip),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(trip => dispatch({ type: 'NEW_TRIP_ADDED', payload: trip }));
    };
  }
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
