import React, {Component} from 'react';
import { connect } from 'react-redux'
import { addBooking } from '../actions/bookings'


class BookingForm extends Component {
  constructor() {
    super()
      this.state = {
        name: '',
        trip_type: '',
        booking_type: '',
        location: '',
        start_date: '',
        end_date: '',
        cost: '',
        details: '',
        loading: false,
        showForm: false
          }
      }

    handleInput = (e) => {
      e.preventDefault()
      this.setState({
      showForm: true
      })
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const booking = {...this.state}
      this.props.addBooking(booking)
      this.setState({
        name: '',
        trip_type: '',
        booking_type: '',
        location: '',
        start_date: '',
        end_date: '',
        cost: '',
        details: '',
        loading: false,
        showForm: false
      })
    }

  render () {
    const form =
      <form onSubmit={this.handleOnSubmit}>
        <label>Booking Name:</label>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br/>

        <label>Select Trip Type:</label>
          <select id="trip_type" size="1" onChange={this.handleOnChange}>
            <option value={this.state.trip_type} disabled selected>Trip Type</option>
            <option>Extended Vacation</option>
            <option>Business Trip</option>
            <option>Visit Family</option>
            <option>Day Trip</option>
            <option>Weekend Getaway</option>
            <option>Wedding Guest</option>
          </select>


        <label>Select Booking Type:</label>
          <select id="booking_type" size="1" onChange={this.handleOnChange}>
            <option value={this.state.booking_type} disabled selected>Booking Type</option>
            <option>hotel</option>
            <option>flight</option>
            <option>bus fare</option>
            <option>train fare</option>
            <option>admission ticket</option>
            <option>car rental</option>
            <option>equipment rental</option>
            <option>tour guide</option>
          </select>

        <label>location:</label>
        <input type='text' name='location' value={this.state.location} onChange={this.handleChange} /><br/>

        <label>Start Date:</label>
        <input type='date' name='start_date' value={this.state.start_date} onChange={this.handleChange} /><br/>

        <label>End Date:</label>
        <input type='date' name='end_date' value={this.state.end_date} onChange={this.handleChange} /><br/>

        <label>Booking Cost:</label>
        <input type="integer" name="cost" value={this.state.cost} onChange={this.handleOnChange} /><br/>

        <label>Details:</label>
        <input type='text' name='details' value={this.state.details} onChange={this.handleChange} /><br/>
        <input type='submit' value='Add Friend' /><br/>

      <hr/>
    </form>

    const button =
      <button onClick={this.handleClick}>Add a New Booking!</button>

      return(
        <div className='booking-form'>
          {this.state.showForm ? form : button}
        </div>
      )
  }
}

export default connect(null, { addBooking })(BookingForm)
