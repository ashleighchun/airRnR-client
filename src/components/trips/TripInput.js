import React, { Component} from 'react'
import { connect } from 'react-redux'
import { addTrip } from '../../actions/tripActions'


class TripInput extends Component {

  state = {
      name: '',
      trip_type: '',
      location: '',
      start_date: '',
      end_date: '',
      total_cost: '',
      details: ''
    };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const trip = this.state;
    this.props.addTrip(trip);
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
      <div id="tripform">
        <form onSubmit={this.handleOnSubmit}>
          <label>New Trip Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleOnChange}/><br/>

          <select name="trip_type" value={this.state.trip_type} onChange={this.handleOnChange}>
            <option>Vacation</option>
            <option>Business Trip</option>
            <option>Visit Family</option>
            <option>Wedding</option>
          </select>

          <label>Location: </label>
          <input type='text' placeholder='Location' value={this.state.location} name="location" onChange={this.handleOnChange}/><br/>

          <label>Start Date: </label>
          <input type='text' placeholder='Start' value={this.state.start_date} name="start_date" onChange={this.handleOnChange}/><br/>

          <label>End Date: </label>
          <input type='text' placeholder='End' value={this.state.end_date} name="end_date" onChange={this.handleOnChange}/><br/>

          <label>Details: </label>
          <input type='text' value={this.state.details} name="details" onChange={this.handleOnChange}/><br/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, { addTrip })(TripInput)
