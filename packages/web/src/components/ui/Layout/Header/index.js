import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styles from './styles'
import { withStyles } from '../../../withStyles'

const Header = ({ styles }) => {
  return (
    <div css={styles.header} id="header">
      <div css={styles.toggle}>
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  )
}

export default withStyles(styles)(Header)
