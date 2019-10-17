import React, { Component } from 'react';

class Home extends Component {
    render() {
        return(
            <div className='home'>
                <h2>Welcome to AirRnR!</h2>
                <hr/>
                <p>
                  AirRnR is your resource for tracking all of the upcoming trip bookings you have planned!
                </p>
                <img src="https://images.trvl-media.com/media/content/expus/graphics/launch/home/tvly/150324_flights-hero-image_1330x742.jpg" alt="plane vacation" className="img-responsive"/>

            </div>
        )
    }
}

export default Home
