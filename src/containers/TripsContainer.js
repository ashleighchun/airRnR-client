import React from 'react'
import { connect } from 'react-redux'
import TripsIndex from '../components/TripsIndex'
import TripForm from '../components/TripForm'

class TripsContainer extends React.Component {

  render() {
    return (
      <div>
        <TripForm />
        <TripsIndex />
      </div>
    )
  }
}

export default TripsContainer
