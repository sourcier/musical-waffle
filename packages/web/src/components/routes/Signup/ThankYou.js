import React from 'react'

import { Meta } from '../../Meta'
import { withStyles } from '../../withStyles'
import styles from './styles'

export const NotFound = ({ styles }) => (
  <div css={styles.contact}>
    <Meta title="Thanks for being awesome!" />
    <h2>Thanks for being awesome!</h2>

    <p>
      I have received your message and would like to thank you for writing to
      me. I will reply by email as soon as possible (I usually take 3-4 days to
      reply).
    </p>

    <p>Talk to you soon.</p>
  </div>
)

export default withStyles(styles)(NotFound)
