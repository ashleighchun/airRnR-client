export default (state = {bookings: []}, action ) => {
  switch(action.type) {
    case 'LOADING_BOOKINGS':
      return {
      ...state,
      loading: true
      }
    case 'FETCH_BOOKINGS':
      return {
        ...state,
        bookings: action.payload,
        loading: false
      }
    case 'DELETE_BOOKING':
      console.log("Booking selected to delete")
      return {
        ...state,
        loading: true
      }
    case 'BOOKING_DELETED':
      console.log("Booking has been deleted")
      return {
        ...state,
        bookings: state.bookings.filter(booking => booking.id !== action.id),
        loading: false
      }
    case 'ADD_BOOKING':
      console.log("Booking selected to add")
      return {
        ...state,
        loading: true
      }
    case 'BOOKING_ADDED':
      console.log("Booking has been added")
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
        loading: false
      }
    default:
      return state
  }
}
