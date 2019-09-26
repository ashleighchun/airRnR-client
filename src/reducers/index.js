import { combineReducers } from 'redux'
import bookingReducer from './bookingReducer'
import tripReducer from './tripReducer'

const rootReducer = combineReducers({
  bookings: bookingReducer,
  trips: tripReducer
})

export default rootReducer;
