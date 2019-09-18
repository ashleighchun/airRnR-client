import React from 'react'
import { connect } from 'react-redux'
import {fetchTrips} from '../actions/fetchTrips'
import Trips from '../components/Trips'
import {Route} from 'react-router-dom'
import TripInput from '../components/TripInput'

class TripsContainer extends React.Component {
//get trips from backend:
  componentDidMount() {
    this.props.fetchTrips()
  }

  render() {
    return (
      <div>
        <Route path='/trips/new' component={TripInput}/>
        <hr/>
        <Route exact path='/trips' render={() => <Trips trips={this.props.trips}/>}/ >
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
