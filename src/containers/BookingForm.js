import React, { Component} from 'react';

import { connect } from 'react-redux';

import {addBooking} from '../../actions/bookingActions'

class BookingForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      booking_type: 'flight',
      cost: '',
      notes: ''
    };
  };

  handleChange = (event) => {
    this.setState({
      [event.target.booking_type]: event.target.value,
      [event.target.cost]: event.target.value,
      [event.target.notes]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBooking(this.state, this.props.trip.id)
    this.setState({
      booking_type: 'flight',
      cost: '',
      notes: ''
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Booking Type:</label>
          <select name="booking_type" value={this.state.booking_type} onChange={this.handleChange}>
            <option>flight</option>
            <option>car rental</option>
            <option>housing</option>
          </select>

          <label>Cost:</label>
          <input type="text" name="cost" value={this.state.cost} onChange={this.handleChange}/>

          <label>Notes:</label>
          <input type="text" name="notes" value={this.state.notes} onChange={this.handleChange}/>

          <input type="submit"/>

        </form>
      </div>
    )
  }
}

export default connect(null, {addBooking} )(BookingForm);
