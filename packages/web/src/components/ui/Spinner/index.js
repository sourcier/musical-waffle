import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import { withStyles } from '../../withStyles'
import styles from './styles'

const Spinner = ({ styles }) => {
  return (
    <div css={styles.spinner}>
      <FontAwesomeIcon icon={faCircleNotch} spin size='2x' />
    </div>
  )
}

export default withStyles(styles)(Spinner)
