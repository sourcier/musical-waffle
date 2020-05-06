import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './styles'
import { withStyles } from '../../../withStyles'
import { toggleNav } from '../../../../store/reducers/nav'
import { links, socials } from '../../../../libs/links'

const Header = ({ styles, isOpen, toggleNav }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible'
  }, [isOpen])

  return (
    <div css={styles.header} id="header">
      <div css={styles.buttons}>
        <Link to="/">
          <img
            src={`/assets/img/${isOpen ? 'logo-inverse' : 'logo'}.svg`}
            alt="Sourcier"
          />
        </Link>
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
