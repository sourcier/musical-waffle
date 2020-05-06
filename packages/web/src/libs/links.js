import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

export const links = [
  { label: 'Home', href: '/' },
  // { label: 'About Us', href: '#about' },
  // { label: 'Services', href: '#services' },
  // { label: 'Portfolio', href: '#portfolio' },
  // { label: 'Team', href: '#team' },
  // { label: 'Blog', href: '/blog' },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const socials = [
  {
    label: 'Github',
    href: 'https://github.com/sourcier',
    icon: <FontAwesomeIcon icon={faGithub} />,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/sourcier',
    icon: <FontAwesomeIcon icon={faTwitter} />,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/roger-rajaratnam-3888021a4',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
]

export const legals = [
  {
    label: 'Cookie Policy',
    href: '/cookie-policy',
  },
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    label: 'Terms of Service',
    href: '/terms-of-service',
  },
]
