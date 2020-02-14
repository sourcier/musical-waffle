import React from 'react'
import { lowerCase } from 'lodash'
import Nav from 'react-bootstrap/Nav'

export const socials = [
    { label: 'Twitter', href: 'https://twitter.com/sourcier' },
    { label: 'Github', href: 'https://github.com/sourcier/' },
]

export const Socials = () => (
    <Nav className="ml-auto d-none d-md-flex">
        {socials.map(({ href, label }, key) => (
            <Nav.Link
                href={href}
                key={key}
                className={lowerCase(label)}
                target="_blank"
                rel="noopener noreferrer">
                <i className={`fab fa-${lowerCase(label)} fa-2x`}></i>
            </Nav.Link>
        ))}
    </Nav>
)
