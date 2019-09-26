import React, { Component} from 'react'
import { connect } from 'react-redux'
import { addTrip } from '../../actions/tripActions'


class TripInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      trip_type: '',
      location: '',
      start_date: '',
      end_date: '',
      total_cost: '',
      details: ''
      };
    };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.trip_type]: event.target.value,
      [event.target.location]: event.target.value,
      [event.target.start_date]: event.target.value,
      [event.target.end_date]: event.target.value,
      [event.target.total_cost]: event.target.value,
      [event.target.details]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTrip(this.state)
    this.setState({
      name: '',
      trip_type: '',
      location: '',
      start_date: '',
      end_date: '',
      total_cost: '',
      details: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Trip Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>

          <select name="trip_type" value={this.state.trip_type} onChange={this.handleChange}>
            <option>Vacation</option>
            <option>Business Trip</option>
            <option>Visit Family</option>
            <option>Wedding</option>
          </select>

          <label>Location: </label>
          <input type='text' placeholder='Location' value={this.state.location} name="location" onChange={this.handleChange}/><br/>

          <label>Start Date: </label>
          <input type='text' placeholder='Start' value={this.state.start_date} name="start_date" onChange={this.handleChange}/><br/>

          <label>End Date: </label>
          <input type='text' placeholder='End' value={this.state.end_date} name="end_date" onChange={this.handleChange}/><br/>

          <label>Details: </label>
          <input type='text' value={this.state.details} name="details" onChange={this.handleChange}/><br/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addTrip})(TripInput)
