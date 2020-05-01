import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import styles from './styles'
import { withStyles } from '../../../withStyles'
import { toggleNav } from '../../../../store/reducers/nav'

export const links = [
  { label: 'Home', href: '/', icon: <FontAwesomeIcon icon={faHome} /> },
  // { label: 'About Us', href: '#about' },
  // { label: 'Services', href: '#services' },
  // { label: 'Portfolio', href: '#portfolio' },
  // { label: 'Team', href: '#team' },
  // { label: 'Blog', href: '/blog' },
  {
    label: 'Contact',
    href: '/contact',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
]

export const socials = [
  {
    label: 'Github',
    href: 'https://github.com/sourcier/',
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
]

const Header = ({ styles, isOpen, toggleNav }) => {
  return (
    <div css={styles.header} id="header">
      <div css={styles.toggle}>
        <button onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {isOpen && (
        <div css={styles.menu}>
          <ul>
            {links.map(({ label, icon, href }, key) => (
              <li key={key}>
                {icon}
                <Link to={href}>{label}</Link>
              </li>
            ))}
            {socials.map(({ icon, label, ...link }, key) => (
              <li key={key}>
                {icon}
                <a {...link}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = ({ nav: { isOpen } }) => ({
  isOpen,
})

const mapDispatchToProps = { toggleNav }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Header)
