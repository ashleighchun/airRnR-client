import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchTrips } from './actions/trips'
import TripForm from './containers/TripForm'

//componentdidmount will cause it to fire off first get trips when the component mounted
class App extends Component {
  componentDidMount(){
    this.props.fetchTrips()
  }
  render(){
    const trips = this.props.trips.map((trip, i) => <li key={i}> {trip.name} - {trip.completed ? "Completed" : "Coming Up"}</li>);
    return (
      <div className="App">
        <h2>Create Trip</h2>
        <TripForm />
        <hr />
        <h2>Trip List</h2>
        <ul>
          {this.props.loading ? <h3>Loading...</h3> : trips }
        </ul>
      </div>
    );
  }
}


//***map global state to the props of this specific component
const mapStateToProps = (state) => {
  console.log("I am state", state)
  return {
    trips: state.tripReducer.trips,
    loading: state.tripReducer.loading
  }
}
export default connect(mapStateToProps, { fetchTrips })(App);
