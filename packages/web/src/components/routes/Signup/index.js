import React from 'react'

import { Meta } from '../../Meta'
import { withStyles } from '../../withStyles'
import styles from './styles'
import Form from './form'

export const Contact = ({ styles }) => (
  <div css={styles.contact}>
    <Meta title='Contact' />
    <h2>Sign-Up</h2>
    <Form />
  </div>
)

export default withStyles(styles)(Contact)
