import React from 'react'
import { connect } from 'react-redux'
import {fetchTrips} from '../actions/fetchTrips'
import TripsIndex from '../components/TripsIndex'
import TripInput from '../components/TripInput'

class TripsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTrips()
  }

  render() {
    return (
      <div>
        <TripInput />
        <TripsIndex />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips
  }
}
export default connect(mapStateToProps)(TripsContainer)
