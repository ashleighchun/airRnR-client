import React from 'react';
import { connect } from 'react-redux'
import TripsContainer from './containers/TripsContainer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './containers/Home'
import Navigation from './components/Navigation'

class App extends React.Component {
  render() {
    return (
      <Router>
      <Navigation />
        <div className="App">
          <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/trips" component={TripsContainer} />
           <Route exact path="/bookings" component={BookingsContainer} />
           <Route exact path="/bookings/:id" component={BookingsList} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
