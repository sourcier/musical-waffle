import React from 'react'

import Hero from '../components/Hero'
import { Meta } from '../components/Meta'

export const NotFound = () => (
    <React.Fragment>
        <Meta title="Page not found" />
        <Hero>
            <h2>The page you were looking for could not be found.</h2>
        </Hero>
    </React.Fragment>
)

export default NotFound
