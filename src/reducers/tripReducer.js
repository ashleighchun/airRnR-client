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

    default:
      return state;
  }
}  //**** action objects come from your action object creator functions
// be prepared to answer questions about async feature 
