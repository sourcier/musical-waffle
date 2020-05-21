import React from 'react'
import { Link } from 'react-router-dom'

import { Meta } from '../../Meta'
import { withStyles } from '../../withStyles'
import styles from './styles'

export const NotFound = ({ styles }) => (
  <div css={styles.notFound}>
    <Meta title='Page not found' />
    <h2>
      Page not Found{' '}
      <span role='img' aria-label='Face Screaming in Fear'>
        😱
      </span>
    </h2>
    <p>
      Looks like you've stumbled on a page that doesn’t exist. If you’re sure
      the link is correct, <Link to='/contact'>let me know</Link>.
    </p>
  </div>
)

export default withStyles(styles)(NotFound)
