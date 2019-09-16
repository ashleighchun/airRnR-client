import React, { Component } from 'react';

import { connect } from 'react-redux'
import { fetchTrips } from './actions/fetchTrips'
import TripsContainer from './containers/TripsContainer'


class App extends React.Component {

render() {
    return (
      <div className="App">
        <TripsContainer/>
      </div>
    );
  }
}


export default App;
