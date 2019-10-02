import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addBooking } from '../actions/bookings'

class BookingInput extends Component {
  constructor(props) {
    super(props)
      this.state = {
        booking_type: '',
        start_date: '',
        end_date: '',
        booking_cost: '',
        details: '',
        trip_id: props.trip_id,
        loading: false,
        showForm: false
      }
    }
    handleClick = (e) => {
            e.preventDefault()
            this.setState({
                showForm: true
            })
        }


    handleOnChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      })
    }


    handleSubmit = event => {
      event.preventDefault()
        const meetup = {...this.state}
        this.props.addMeetup(meetup)
        this.setState({
          booking_type: 'flight',
          start_date: '',
          end_date: '',
          booking_cost: '',
          details: '',
          trip_id: '',
          loading: false,
          showForm: false
      })
    }

    render() {
      const form =
          <form onSubmit={this.handleSubmit}>

            <label>Type of Booking: </label>
            <input type='text' name='booking_type' value={this.state.booking_type} onChange={this.handleChange} /><br/>


            <label>Start Date:</label>
            <input type='text' name='start_date' value={this.state.start_date} onChange={this.handleChange} /><br/>

            <label>End Date:</label>
            <input type='text' name='end_date' value={this.state.end_date} onChange={this.handleChange} /><br/>

            <label>Cost of Booking:</label>
            <input type='text' name='cost' value={this.state.booking_cost} onChange={this.handleChange} /><br/>

            <label>Booking Details:</label>
            <input type='text' name='details' value={this.state.details} onChange={this.handleChange} /><br/>


            <input type='submit' value='Add Booking' /><br/>

            <hr/>

        </form>

        const button =
            <button onClick={this.handleClick}>Add a Booking!</button>

        return(
            <div className='booking-input'>
                {this.state.showForm ? form : button}
            </div>
        )
    }
}

export default connect(null, { addBooking })(BookingInput)
