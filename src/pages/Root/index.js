import React from 'react'
import { Header } from './Header'
import { Hero } from './Hero'
import { Footer } from './Footer'

export const Root = ({ children }) => (
    <React.Fragment>
        <Header />
        <Hero />
        {children}
        <Footer />
    </React.Fragment>
)
