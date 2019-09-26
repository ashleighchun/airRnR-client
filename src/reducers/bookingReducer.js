export default function bookingReducer(
  state = [] , action
) {
  switch(action.type) {
    case 'FETCH_BOOKINGS':
      return action.payload ;
    case 'LOADING_BOOKINGS':
      return state;
    case 'UPDATE_BOOKING_SUCCESS' :
        let index = state.findIndex((obj => obj.id === action.payload.id));
        return [...state.slice(0, index), action.payload, ...state.slice(index+1)];
    default:
    return state;
  }
}
