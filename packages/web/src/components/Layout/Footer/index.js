import React from 'react'
import styles from './styles'
import { withStyles } from '../../withStyles'

export const Component = ({ styles }) => (
  <footer css={styles.footer}>
    <div css={styles.links}>
      <ul>
        <li>Home</li>
        <li>Contact</li>
      </ul>
    </div>
    <div css={styles.copyright}>
      <p>
        Sourcier Ltd. is registered in England and Wales company number 8086280.
      </p>
      <p>&copy; 2020 Sourcier Ltd. All Rights Reserved.</p>
      <p>
        <a href="#root">Back to top</a>
      </p>
    </div>
  </footer>
)

export const Footer = withStyles(styles)(Component)
