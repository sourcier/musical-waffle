import React from 'react'

import { Meta } from '../../Meta'
import { withStyles } from '../../withStyles'
import styles from './styles'
import Form from './form'

export const Contact = ({ styles }) => (
  <div css={styles.contact}>
    <Meta title='Contact' />
    <h2>
      Contact{' '}
      <span role='img' aria-label='Call Me Hand'>
        🤙
      </span>
    </h2>
    <p>
      Please fill out this form and I’ll get back to you as quickly as I can. I
      usually take 3-4 days to reply.
    </p>
    <Form />
  </div>
)

export default withStyles(styles)(Contact)
