import React from 'react'
import Nav from 'react-bootstrap/Nav'
import classnames from 'classnames'

export const links = [
  { label: 'Home', href: '/#intro' },
  // { label: 'About Us', href: '#about' },
  // { label: 'Services', href: '#services' },
  // { label: 'Portfolio', href: '#portfolio' },
  // { label: 'Team', href: '#team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '#footer' },
]

export const Navigation = ({ omit = [], vertical = false }) => {
  return (
    <Nav className={classnames({ 'flex-column': vertical })}>
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
