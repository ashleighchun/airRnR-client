import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTrip } from '../actions/trips'

class TripForm extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }

}
                        //state to props then dispatch to props
                        //this theres no state just do dispatch to props 
export default connect(null, { addTrip })(TripForm)
