import React from 'react'
import Hero from './hero'
import Banner from './banner'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner title="luxurious house" subtitle="deluxe room starting at $299">
                        <Link to="/rooms" className="btn-primary">our rooms</Link>
                    </Banner>
                </Hero>
            </div>
        )
    }
}