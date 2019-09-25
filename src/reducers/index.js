import { combineReducers } from 'redux'

import tripReducer from './tripReducer'
import bookingsReducer from './bookingsReducer'


const rootReducer = combineReducers({
  user: tripReducer,
  post: bookingsReducer
})

export default rootReducer
