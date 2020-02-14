import React from 'react'
import Nav from 'react-bootstrap/Nav'

export const links = [
    { label: 'Home', href: '/#intro' },
    // { label: 'About Us', href: '#about' },
    // { label: 'Services', href: '#services' },
    // { label: 'Portfolio', href: '#portfolio' },
    // { label: 'Team', href: '#team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '#footer' },
]

export const Navigation = ({ omit = [] }) => {
    return (
        <Nav>
            {links
                .filter((link) => !omit.includes(link.label))
                .map(({ href, label }, key) => (
                    <Nav.Link href={href} key={key}>
                        {label}
                    </Nav.Link>
                ))}
        </Nav>
    )
}
