export default ( state = { trips: [], loading: false }, action ) => {
  switch(action.type) {

    case 'FETCH_TRIPS':
      return { ...state, loading: false, trips: action.payload };

    case 'LOADING_TRIPS':
      return { ...state, loading: true };

    case 'NEW_TRIP_ADDED':
      return [...state, action.payload];

    default:
    return state;
  }
}
