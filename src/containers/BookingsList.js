import React, { Component } from 'react'
import TripsContainer from './TripsContainer';

class BookingsList extends Component {
    render() {
        return (
            <div>
                <h2>The Bookings with {this.props.match.params.id.split("_").join(" ")} </h2>
                <BookingsContainer searchTerm={this.props.match.params.id.split("_").join(" ")} searchType="i" />
                {console.log(this.props.match.params.id)}
            </div>
        )
    }
}

export default BookingsList;
