import React, {Component} from 'react'
import { connect } from 'react-redux'
import TripInput from '../components/TripInput'
import TripsList from '../components/TripsList'
import { getTrips } from '../actions/trips'

class TripsContainer extends Component {
    componentDidMount(){
        this.props.getTrips()
    }

    render() {
        return(
            <div className='trips-container'>
                <h2>My Trips</h2>
                <TripInput/>
                {this.props.loading ? <h3>Loading...</h3> : <TripsList trips={this.props.trips} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      trips: state.tripReducer.trips,
      loading: state.tripReducer.loading
    }
}

export default connect(mapStateToProps, { getTrips })(TripsContainer)
