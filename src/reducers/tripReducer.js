export default function tripReducer(
  state = [] , action
) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      return action.payload
    case 'LOADING_TRIPS':
      return state;
    case 'NEW_TRIP_ADDED':
      return [...state, action.payload];
    
    default:
    return state;
  }
}
