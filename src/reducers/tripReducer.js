export default function tripReducer(state = {trips: []}, action) {
  debugger;
  switch (action.type) {
    case 'FETCH_TRIPS':
      return {trips: action.payload}
    case 'ADD_TRIP':
      return {...state, trips: [...state.trips, action.payload]}
    case 'ADD_BOOKING':
      return {}
    default:
      return state
  }
}  //**** action objects come from your action object creator functions
// be prepared to answer questions about async feature
