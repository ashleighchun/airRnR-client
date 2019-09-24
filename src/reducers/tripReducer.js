export default function tripReducer(state = {trips: []}, action) {

  switch (action.type) {
    case 'FETCH_TRIPS':
      return {trips: action.payload}
    case 'ADD_TRIP':
      return {...state, trips: [...state.trips, action.payload]}
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
  
    default:
      return state
  }
}  //**** action objects come from your action object creator functions
// be prepared to answer questions about async feature
