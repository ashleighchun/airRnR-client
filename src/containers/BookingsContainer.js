import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookingsList from '../components/BookingsList'
import { getBookings } from '../actions/bookings'


class BookingsContainer extends Component {
    componentDidMount(){
        this.props.getBookings()
    }



    render() {
        return(
            <div className='bookings-container'>
              <h1>My Bookings</h1>
              {console.log(this.props.loading, this.props.bookings)}
                {this.props.bookings.loading ? <h3>Loading...</h3> : <BookingsList bookings={this.props.bookings.bookings} />}
            </div>
        )
    }
}

/*align state with the component*/
const mapStateToProps = (state) => {
debugger
  return {
    bookings: state.bookings,
    loading: state.loading
  }
}


export default connect(mapStateToProps, { getBookings })(BookingsContainer)
