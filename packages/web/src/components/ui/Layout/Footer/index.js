import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles'
import { withStyles } from '../../../withStyles'
import { links, socials } from '../Header'

export const Component = ({ styles }) => (
  <footer css={styles.footer}>
    <div css={styles.links}>
      <ul>
        {links.map(({ label, icon, href }, key) => (
          <li key={key}>
            <Link to={href}>{label}</Link>
          </li>
        ))}
        {socials.map(({ icon, label, ...link }, key) => (
          <li key={key}>
            <a {...link}>{icon}</a>
          </li>
        ))}
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
