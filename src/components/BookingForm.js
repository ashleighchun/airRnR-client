import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addBooking } from '../actions/bookings'

class BookingForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        trip_id: '',
        location: '',
        booking_type: '',
        start_date: '',
        end_date: '',
        booking_cost: '',
        details: '',
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


    handleOnSubmit = event => {
      event.preventDefault()
        const booking = {...this.state}
        this.props.addBooking(booking).then( () =>
        this.props.history.push('/bookings')
        )
        this.setState({
          trip_id: '',
          location: '',
          booking_type: '',
          start_date: '',
          end_date: '',
          booking_cost: '',
          details: '',
          loading: false,
          showForm: false
      })
    }

    render() {
      const form =
          <form onSubmit={this.handleSubmit}>

            <select id="trip_id" size="1" onChange={this.handleOnChange}>
              <option value="" disabled selected>Select Trip Type</option>
              <option value={this.props.trips[0].id}>{this.props.trips[0].trip_type}</option>
              <option value={this.props.trips[1].id}>{this.props.trips[1].trip_type}</option>
              <option value={this.props.trips[2].id}>{this.props.trips[2].trip_type}</option>
              <option value={this.props.trips[3].id}>{this.props.trips[3].trip_type}</option>
              <option value={this.props.trips[4].id}>{this.props.trips[4].trip_type}</option>
              <option value={this.props.trips[5].id}>{this.props.trips[5].trip_type}</option>
            </select>

            <label>Location: </label>
            <input type='text' name='location' value={this.state.location} onChange={this.handleChange} /><br/>


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
const mapStateToProps = (state) => {
  console.log("FORM", state)
  return {
    trips: state.tripReducer.trips
  }
}


export default connect(mapStateToProps, { addBooking })(BookingForm)
