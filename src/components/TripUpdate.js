import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editTrip } from '../actions/trips'

class TripUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.trip.id,
            name: props.trip.name,
            trip_type: props.trip.trip_type,
            destination: props.trip.destination,
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const trip = {...this.state}
        this.props.editTrip(trip)
        this.setState({
          name: this.props.trip.name,
          trip_type: this.props.trip.birthday,
          destination: this.props.trip.destination,
          loading: false,
          showForm: false
        })
    }

    render() {
        const form =
          <form onSubmit={this.handleSubmit}>
            <label>Trip Name: </label>
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br/>

            <label>Type of Trip: </label>
            <select name="trip_type" value={this.state.trip_type} onChange={this.handleOnChange}>
              <option>Vacation</option>
              <option>Business Trip</option>
              <option>Visit Family</option>
              <option>Wedding</option>
              <option>Day Trip</option>
            </select>

            <label>Destination:</label>
            <input type='text' name='destination' value={this.state.destination} onChange={this.handleChange} /><br/>

            <input type='submit' value='Add Trip' /><br/>

            <hr/>

          </form>

    const button =
        <button onClick={this.handleClick}>Update {this.props.trip.name}'s Info</button>
        return(
            <div className='trip-update'>
                {this.state.showForm ? form : button}
            </div>
        )
    }
}
export default connect(state => ({trips: state.trips}), { editTrip })(TripUpdate)
