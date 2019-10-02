export default (state = {trips: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_TRIPS':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_TRIPS':
            return {
                ...state,
                trips: action.payload,
                loading: false
            }
        case 'ADD_TRIP':
            return {
                ...state,
                loading: true
            }
        case 'TRIP_ADDED':
            return {
                ...state,
                trips: [...state.trips, action.payload],
                loading: false
            }
        case 'UPDATE_TRIP':
            return {
                ...state,
                loading: true
            }
        case 'TRIP_UPDATED':
            let newTrips = state.trips.filter(t => t.id !== action.payload.id).concat(action.payload)
            return {
                ...state,
                trips: newTrips,
                loading: false
            }
        default:
            return state
    }
}
