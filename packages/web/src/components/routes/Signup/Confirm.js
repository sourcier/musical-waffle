import React from 'react'

import { Meta } from '../../Meta'
import { withStyles } from '../../withStyles'
import Form from './ConfirmForm'
import styles from './styles'

export const NotFound = ({ styles }) => (
  <div css={styles.contact}>
    <Meta title="Thanks for being awesome!" />
    <h2>Confirm</h2>
    <Form />
  </div>
)

export default withStyles(styles)(NotFound)
