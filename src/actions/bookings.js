export const createBookings = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_BOOKINGS'})
        return fetch('/bookings')
        .then(resp => resp.json())
        .then(bookings => dispatch({type: 'FETCH_BOOKINGS', payload: bookings}))
    }
}

export const addBooking = (booking) => {
    return (dispatch) => {
        dispatch({type: 'ADD_BOOKING'})
        return fetch('/bookings', {
            method: 'POST',
            body: JSON.stringify(booking),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(booking => dispatch({type: 'BOOKING_ADDED', payload: booking}))
    }
}

export const deleteBooking = (id) => {
    return (dispatch) => {
        dispatch({type: 'DELETE_BOOKING'})
        return fetch(`/bookings/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(bookings => dispatch({type: 'BOOKING_DELETED', payload: {bookings: bookings}}))
    }
}
