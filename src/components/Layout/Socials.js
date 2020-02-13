import React from 'react'
import { lowerCase } from 'lodash'

export const socials = [
    { label: 'Twitter', href: 'https://twitter.com/sourcier' },
    { label: 'Github', href: 'https://github.com/sourcier/' },
]

export const Socials = () => (
    <React.Fragment>
        {socials.map(({ href, label }, key) => (
            <a
                key={key}
                href={href}
                className={lowerCase(label)}
                target="_blank"
                rel="noopener noreferrer">
                <i className={`fa fa-${lowerCase(label)}`}></i>
            </a>
        ))}
    </React.Fragment>
)
