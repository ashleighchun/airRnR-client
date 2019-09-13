import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getTrips } from './actions/trips'

class App extends Component {
  componentDidMount(){
    this.props.gettrips()
  }
  render(){
    const trips = this.props.trips.map((trip, i) => <li key={i}> {trip.name} - {trip.location} - {trip.completed ? "Completed" : "Coming Up"}</li>);
    return (
      <div className="App">
        <h2>Create Trip</h2>
        <hr />
        <h2>Trip List</h2>
        {this.props.loading ? <h3>Loading...</h3> : trips }
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
export default connect(mapStateToProps, { getTrips })(App);
