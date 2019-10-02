import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/NavBar'

import TripsContainer from './containers/TripsContainer'
import BookingsContainer from './containers/BookingsContainer'



class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/bookings' component={BookingsContainer}/>
            <Route path='/bookings/new' component={BookingFormContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
