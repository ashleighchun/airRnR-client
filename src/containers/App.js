import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'

import { fetchTrips } from '../actions/tripActions'
import { fetchBookings } from '../actions/bookingActions'

import TripsContainer from './TripsContainer'
import BookingsContainer from './BookingsContainer'

import About from '../components/About'
import NavBar from '../components/NavBar'
import Home from '../components/Home'

import '../App.css';

class App extends Component{


componentDidMount(){
    this.props.fetchBookings();
    this.props.fetchTrips();
  }

  render(){
    return (
      <Router>
      <div className="App">
        <h1>Welcome to AirRnR</h1>
      <NavBar />
        <div >
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path='/bookings' render={ routerProps => <BookingsContainer {...routerProps}  bookings={this.props.bookings} />} />
          <Route path='/trips' render={ routerProps => < TripsContainer {...routerProps} trips={this.props.trips} />} />
        </div>
      </div>
      </Router>
    )
  }
};

const mapStateToProps = state => {
  return {
      bookings: state.bookings,
    trips: state.trips
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    fetchBookings: () => dispatch(fetchBookings()),
    fetchTrips: () => dispatch(fetchTrips())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
