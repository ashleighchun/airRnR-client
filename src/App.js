import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import TripsContainer from './containers/TripsContainer'
import TripContainer from './containers/TripContainer'
import Navigation from './components/NavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/trips' component={TripsContainer}/>
            <Route path='/trip/:id' component={TripContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
