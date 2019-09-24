import React from 'react'
import {connect} from 'react-redux'
import {addBooking} from '../actions/addBooking'




class BookingInput extends React.Component {

  state = {
    booking_type: 'flight',
    cost: '',
    start_date: '',
    end_date: '',
    notes: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBooking(this.state, this.props.trip.id)
    this.setState({
      booking_type: 'flight',
      cost: '',
      start_date: '',
      end_date: '',
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

          <label>Start Date:</label>
          <input type="text" name="start_date" value={this.state.start_date} onChange={this.handleChange}/>

          <label>End Date:</label>
          <input type="text" name="end_date" value={this.state.end_date} onChange={this.handleChange}/>

          <label>Notes:</label>
          <input type="text" name="notes" value={this.state.notes} onChange={this.handleChange}/>

          <input type="submit"/>

        </form>
      </div>
    )
  }
}

export default connect(null, {addBooking})(BookingInput)
