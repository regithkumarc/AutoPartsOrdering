import React from 'react'
import Hero from './hero'
import Banner from './banner';
import { Link } from 'react-router-dom';

const Rooms = () => {
    return(
        <div>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/home" className="btn-primary">Return Home</Link>
                </Banner>
            </Hero>
        </div>
    )
}
export default Rooms;