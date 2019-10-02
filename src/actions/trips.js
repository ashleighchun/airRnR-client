export const getTrips = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TRIPS'})
        return fetch('/trips')
        .then(resp => resp.json())
        .then(trips => dispatch({type: 'FETCH_TRIPS', payload: trips}))
    }
}

export const addTrip = (trip) => {
    return (dispatch) => {
        dispatch({type: 'ADD_TRIP'})
        return fetch('/trips', {
            method: 'POST',
            body: JSON.stringify(trip),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(trip => dispatch({type: 'TRIP_ADDED', payload: trip}))
    }
}

export const editTrip = (trip) => {
    return (dispatch) => {
        dispatch({type: 'UPDATE_TRIP'})
        return fetch(`/trips/${trip.id}`, {
            method: 'PUT',
            body: JSON.stringify(trip),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(trip => dispatch({type: 'TRIP_UPDATED', payload: trip}))
    }
}
