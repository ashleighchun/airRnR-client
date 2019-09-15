export default (state = {trips: [], loading: false}, action ) => {
  switch(action.type) {
    case 'LOADING_TRIPS':
      return {
        ...state,
        loading:true
      }

    case 'FETCH_TRIPS':
      return {
        trips: action.payload,
        loading: false
  }

    case 'ADD_TRIP':
      console.log("Got a new trip to add")
      return {
        ...state,
        loading: true
      }

    case 'TRIP_ADDED':
      console.log("Added the trip")
      //return updated state which is array of trips.
      //spread(...)aka grab all trips from state.trips(the array)
      ///and then add in action.todo which is the new thing to add
      return {
        trips: [...state.trips, action.trip],
        loading: false
      }


    default:
      return state;
  }
}  //**** action objects come from your action object creator functions
// be prepared to answer questions about async feature
