import { combineReducers } from 'redux'
import bookingReducer from './bookingReducer'


const rootReducer = combineReducers({
  bookings: bookingReducer
})

export default rootReducer
