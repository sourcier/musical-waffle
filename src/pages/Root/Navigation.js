import React from 'react'

export const links = [
    { label: 'Home', href: '#intro' },
    // { label: 'About Us', href: '#about' },
    // { label: 'Services', href: '#services' },
    // { label: 'Portfolio', href: '#portfolio' },
    // { label: 'Team', href: '#team' },
    { label: 'Contact Us', href: '#footer' },
]

export const Navigation = ({ onClick, omit = [] }) => {
    const props = onClick ? { onClick } : {}

    return (
        <ul>
            {links
                .filter((link) => !omit.includes(link.label))
                .map(({ href, label }, key) => (
                    <li key={key}>
                        <a href={href} {...props}>
                            {label}
                        </a>
                    </li>
                ))}
        </ul>
    )
}
