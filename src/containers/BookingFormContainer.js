import React, { Component } from 'react';
import { connect } from 'react-redux'

import { createBooking } from '../actions/bookings'
import { updateBookingFormData } from '../actions/bookingForm';

class BookingForm extends Component {
  const { name, value } = event.target;
  const currentBookingFormData = Object.assign({}, this.props.bookingFormData, {
      [name]: value
    })
    this.props.updateBookingFormData(currentBookingFormData)
  }

  render() {
    const { name, price, img_url, length } = this.props.bookingFormData;

    return (
          <div>
            Add A New Booking
              <form onSubmit={this.handleOnSubmit}>
              <div>
                <label>Description:</label>
                <input
                  type="text"
                  onChange={this.handleOnChange}
                  name="details"
                  value={details}
                />
              </div>
              <div>
                <select id="trip_id" size="1" onChange={this.handleOnChange}>
                  <option value="" disabled selected>Select Trip Type</option>
                  <option value={this.props.trips[0].id}>{this.props.trips[0].trip_type}</option>
                  <option value={this.props.trips[1].id}>{this.props.trips[1].trip_type}</option>
                  <option value={this.props.trips[2].id}>{this.props.trips[2].trip_type}</option>
                  <option value={this.props.trips[3].id}>{this.props.trips[3].trip_type}</option>
                  <option value={this.props.trips[4].id}>{this.props.trips[4].trip_type}</option>
                  <option value={this.props.trips[5].id}>{this.props.trips[5].trip_type}</option>
                </select>

                <label>location:</label>
                <input
                  type="text"
                  onChange={this.handleOnChange}
                  name="location"
                  value={location}
                />
              </div>
              <div>
                <label>Booking Type:</label>
                <select id="booking_type" size="1" onChange={this.handleOnChange}>
                  <option value="" disabled selected>Select Trip Type</option>
                  <option>hotel</option>
                  <option>flight</option>
                  <option>bus</option>
                  <option>train</option>
                  <option>admission ticket</option>
                  <option>car rental</option>
                  <option>equipment rental</option>
                  <option>tour guide</option>
                </select>
              </div>
              <div>
                <label>Start Date:</label>
                <input
                  type="text"
                  onChange={this.handleOnChange}
                  name="start_date"
                  value={start_date}
                />
              </div>
              <div>
                <label>End Date:</label>
                <input
                  type="datetime"
                  onChange={this.handleOnChange}
                  name="end_date"
                  value={end_date}
                />
              </div>
              <div>
                <label>Booking Cost:</label>
                <input
                  type="integer"
                  onChange={this.handleOnChange}
                  name="booking_cost"
                  value={booking_cost}
                />
              </div>

              <button type="submit">Add Board</button>
            </form>
          </div>
        )
      }
    }

    const mapStateToProps = state => {
      return {
        bookingFormData: state.bookingFormData
      }
    }

    export default connect(mapStateToProps, {
      updateBookingFormData,
      createBooking
    })(BookingForm);
