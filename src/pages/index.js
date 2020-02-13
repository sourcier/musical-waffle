import React from 'react'
import Hero from '../components/Hero'
import { Meta } from '../components/Meta'

const HomePage = () => (
    <React.Fragment>
        <Meta />
        <Hero>
            <h2>
                Digital Solutions
                <br />
                for Your <span>Business</span>
            </h2>
        </Hero>
    </React.Fragment>
)

export default HomePage