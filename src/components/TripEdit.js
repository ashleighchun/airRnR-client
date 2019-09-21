import React from 'react'
import {connect} from 'react-redux'
import {editTrip} from '../actions/editTrip'

class TripEdit extends React.Component {

  state = {
    name: '',
    location: '',
    start_date: '',
    end_date: '',
    budget: '',
    details: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let trip = {...this.state, id: this.props.trip.id}
    this.props.editTrip(trip)
    this.setState({
      name: '',
      location: '',
      start_date: '',
      end_date: '',
      budget: '',
      details: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Trip Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Location: </label>
          <input type='text' placeholder='Location' value={this.state.location} name="location" onChange={this.handleChange}/><br/>

          <label>Start Date: </label>
          <input type='text' placeholder='Start' value={this.state.start_date} name="start_date" onChange={this.handleChange}/><br/>

          <label>End Date: </label>
          <input type='text' placeholder='End' value={this.state.end_date} name="end_date" onChange={this.handleChange}/><br/>

          <label>Budget: </label>
          <input type='text' placeholder='($)' value={this.state.budget} name="budget" onChange={this.handleChange}/><br/>

          <label>Details: </label>
          <input type='text' value={this.state.details} name="details" onChange={this.handleChange}/><br/>

        <input type="submit"/>

        </form>
      </div>
    )
  }
}


export default connect(null, {editTrip})(TripEdit)
