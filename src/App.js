import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getTrips } from './actions/trips'
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
