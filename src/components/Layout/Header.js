import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import { Navigation } from './Navigation'
import { Socials } from './Socials'

export const Header = () => (
    <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="/">Sourcier</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Navigation />
            <Socials />
        </Navbar.Collapse>
    </Navbar>
)
