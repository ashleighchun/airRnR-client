import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';
import tripReducer from './tripReducer';

const rootReducer = combineReducers({
  bookingReducer,
  tripReducer
});

export default rootReducer;
