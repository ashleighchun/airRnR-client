import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTrip } from '../actions/trips'

class TripForm extends Component {
  //need local state in form to take in state from input
  state = {
    name: '',
    loading: false
  } //reset to blank after form takes in user input to reset form

  handleOnChange = e => {
    const {value} = e.target   //deconstructs target so you dont have to say e.target.value
    this.setState({
      name: value
    })
  }
  handleOnSubmit = e => {
    e.preventDefault()
    const trip = {...this.state}
    this.props.addTrip(trip)
    this.setState({
      name: '',
      loading: false
    }) //addTrip is available to use because I connected dispatch to props
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <label>Trip Name: </label>
          <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.handleOnChange}
          /><br/>
          <button type='submit'> Add New Trip </button>
        </form>
      </div>
    )
  }

}
                        //state to props then dispatch to props
                        //this theres no state just do dispatch to props
export default connect(null, { addTrip })(TripForm)
