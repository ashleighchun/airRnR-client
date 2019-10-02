import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTrip } from '../actions/trips'

class TripInput extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            trip_type: '',
            destination: '',
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
        this.props.addTrip(trip)
        this.setState({
          name: '',
          trip_type: '',
          destination: '',
          loading: false,
          showForm: false
        })
    }

    render() {
        const form =
            <form onSubmit={this.handleSubmit}>
                <label>Trip Name: </label>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br/>

                <label>Trip Purpose: </label>
                <input type='text' name='trip_type' value={this.state.trip_type} onChange={this.handleChange} /><br/>

                <label>Destination:</label>
                <input type='text' name='destination' value={this.state.destination} onChange={this.handleChange} /><br/>

                <input type='submit' value='Add Trip' /><br/>

                <hr/>

            </form>

    const button =
        <button onClick={this.handleClick}>Add a Trip!</button>

        return(
            <div className='trip-input'>
                {this.state.showForm ? form : button}
            </div>
        )
    }
}

export default connect(null, { addTrip })(TripInput)
