import React, { Component } from 'react'
import { connect } from 'react-redux'
import AllButton from '../components/AllButton'
import TripButton from '../components/TripButton'

class TripsContainer extends Component {

  render(){

    const trips = this.props.trips.map(trip => <TripButton key={trip.id} trip={trip} handleThisClick={this.props.handleClick} /> )

    return (
      <div>
        <h3>Select trip to filter bookings</h3>
        <AllButton handleThisClick={this.props.handleClick} />
        {/* { trips } */}
        {this.props.loading ? <h3>Loading...</h3> : trips }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.tripReducer.trips,
    loading: state.tripReducer.loading
  }
}

export default connect(mapStateToProps)(TripsContainer)
