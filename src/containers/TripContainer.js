import React, { Component } from 'react';
import { connect } from 'react-redux'
import Trip from '../components/Trip'
import TripUpdate from '../components/TripUpdate'
import BookingInput from '../components/BookingInput'
import BookingsList from '../components/BookingsList'
import { getBookings, deleteBooking } from '../actions/bookings'


class TripContainer extends Component {
    componentDidMount(){
        this.props.getBookings()
    }

    handleClick = (e) => {
        this.props.deleteBooking(e.target.id)
    }

    render() {
        return(
            <div className='trip-container'>
                <Trip trip={this.props.trip} />
                <TripUpdate trip={this.props.trip} />
                <hr/>

                <BookingInput trip_id={this.props.trip.id}/>
                {this.props.loading ? <h3>Loading...</h3> : <BookingsList bookings={this.props.bookings} handleOnClick={this.handleClick}/>}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
      trip: state.tripReducer.trips.filter(f => f.id === parseInt(props.match.params.id))[0],
      bookings: state.bookingReducer.bookings.filter(m => m.trip_id === parseInt(props.match.params.id)),
      loading: state.bookingReducer.loading
    }
}

export default connect(mapStateToProps, { getBookings, deleteBooking })(TripContainer)
