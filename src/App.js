import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchTrips} from './actions/fetchTrips'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TripsContainer from './containers/TripsContainer';
import TripsList from './components/trips/TripsList'


class App extends Component {

  constructor(props) {
  super(props)
  this.state = {
    trips: []
    }
  }

  componentDidMount() {
    this.props.fetchTrips()
     .then(trips => this.setState({trips: trips}))
  }

  render() {
    return (
      <div className="App">
        <Router>
      		<React.Fragment>
          	<Route path="/farmersmarkets" component={TripsContainer }/>
            <Route exact path="/" component={TripsContainer}/>
            <Route path="/bookings" render={routerProps => <TripsList {...routerProps}
              stateMarkets={this.state.trips} stateList={this.props.state.bookings}/>}/>
      		</React.Fragment>
      		</Router>
      </div>

    );
  }
}

const mapStateToProps = state => ({ state: state })

export default connect(mapStateToProps, {fetchTrips})(App)
