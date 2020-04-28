import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles'
import { withStyles } from '../../../withStyles'

export const Component = ({ styles }) => (
  <footer css={styles.footer}>
    <div css={styles.links}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Contact</li>
      </ul>
    </div>
    <div css={styles.copyright}>
      <p>
        Sourcier Ltd. is registered in England and Wales company number 8086280.
      </p>
      <p>&copy; 2020 Sourcier Ltd. All Rights Reserved.</p>
      <p>
        <a href="#header">Back to top</a>
      </p>
    </div>
  </footer>
)

export const Footer = withStyles(styles)(Component)
