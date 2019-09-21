import React from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchTrips} from '../actions/fetchTrips'
import Trips from '../components/Trips'
import Trip from '../components/Trip'
import TripInput from '../components/TripInput'

class TripsContainer extends React.Component {
//get trips from backend:
  componentDidMount() {
    this.props.fetchTrips()
  }

  render() {
    return (
      <div>
      <Switch>
        <Route path='/trips/new' component={TripInput}/>
        <hr/>
        <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips}/>}/>
        <hr/>
        <Route path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props.trips}/>}/>
        </Switch>
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
