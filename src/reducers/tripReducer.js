export default (state = {trips: [], loading: false}, action ) => {
  switch(action.type) {
    case 'LOADING_TRIPS':
      return {
        ...state,
        loading:true
      }
      
    default:
      return state;
  }
}  //**** action objects come from your action object creator functions
