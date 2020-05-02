import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import styles from './styles'
import { withStyles } from '../../../withStyles'
import { toggleNav } from '../../../../store/reducers/nav'

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
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible'
  }, [isOpen])

  return (
    <div css={styles.header} id="header">
      <div css={styles.toggle}>
        <button onClick={toggleNav}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimesCircle} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      {isOpen && (
        <div css={styles.menu}>
          <ul>
            {links.map(({ label, icon, href }, key) => (
              <li key={key}>
                <Link to={href}>{label}</Link>
              </li>
            ))}
            {socials.map(({ icon, label, ...link }, key) => (
              <li key={key}>
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
