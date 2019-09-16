export default (state = {trips: [], loading: false}, action ) => {
  switch (action.type) {
    case 'FETCH_TRIPS':
      return {trips: action.payload}
    default:
      return state
  }
}  //**** action objects come from your action object creator functions
// be prepared to answer questions about async feature
