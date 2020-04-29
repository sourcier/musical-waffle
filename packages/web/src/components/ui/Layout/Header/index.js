import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styles from './styles'
import { withStyles } from '../../../withStyles'
import { toggleNav } from '../../../../store/reducers/nav'

const Header = ({ styles, isOpen, toggleNav }) => {
  return (
    <div css={styles.header} id="header">
      <div css={styles.toggle}>
        <button onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
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
