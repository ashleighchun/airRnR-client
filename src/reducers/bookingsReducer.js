const initialState = {
  current: {},
  all: []
}

export default function bookingsReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_BOOKINGS':
      return { ...state, all: action.payload }

    case 'ADD_BOOKING':
      let trips = state.trips.map(trip => {
        if (trip.id === action.payload.id) {
          return action.payload
        } else {
          return trip
        }
      })
        return {...state, trips: trips}
      case 'DELETE_BOOKING':
        let tripsTwo = state.trips.map(trip => {
          if (trip.id === action.payload.id) {
            return action.payload.id
          } else {
            return trip
          }
        })
    default: return state
  }
}
