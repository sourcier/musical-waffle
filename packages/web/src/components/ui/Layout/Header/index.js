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

export const socials = [
  { label: 'Twitter', href: 'https://twitter.com/sourcier' },
  { label: 'Github', href: 'https://github.com/sourcier/' },
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
            <li>
              <FontAwesomeIcon icon={faHome} />
              <Link to="/">Home</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <Link to="#">Contact</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <a
                href="https://github.com/sourcier/"
                target="_blank"
                rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
              <a
                href="https://twitter.com/sourcier"
                target="_blank"
                rel="noopener noreferrer">
                Twitter
              </a>
            </li>
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
