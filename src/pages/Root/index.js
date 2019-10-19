import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Root = ({ children }) => (
    <React.Fragment>
        <Header />
        {children}
        <Footer />
    </React.Fragment>
)
