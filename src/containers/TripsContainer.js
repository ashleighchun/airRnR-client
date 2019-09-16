import React from 'react'
import { connect } from 'react-redux'
import {fetchTrips} from '../actions/fetchTrips'
import TripsIndex from '../components/TripsIndex'
import TripForm from '../components/TripForm'

class TripsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTrips()
  }

  render() {
    return (
      <div>
        <TripForm />
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
