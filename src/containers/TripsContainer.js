import React from 'react'
import { connect } from 'react-redux'
import {fetchTrips} from '../actions/fetchTrips'
import Trips from '../components/Trips'
import TripInput from '../components/TripInput'

class TripsContainer extends React.Component {
//get trips from backend:
  componentDidMount() {
    this.props.fetchTrips()
  }

  render() {
    return (
      <div>
        <TripInput/>
        <Trips/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips
  }
}
export default connect(mapStateToProps, {fetchTrips})(TripsContainer)
