import React from 'react'
import { Header } from './Header'
import { Hero } from './Hero'

export const Root = ({ children }) => (
    <React.Fragment>
        <Header />
        <Hero />
        {children}
    </React.Fragment>
)
