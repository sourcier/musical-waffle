import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles'
import { withStyles } from '../../../withStyles'
import { socials, links, legals } from '../../../../libs/links'

export const Component = ({ styles }) => (
  <React.Fragment>
    <footer css={styles.root}>
      <div css={styles.footer}>
        <div css={styles.socials}>
          <p>
            <strong>Socials</strong>
          </p>
          <ul>
            {socials.map(({ icon, label, ...link }, key) => (
              <li key={key}>
                <a {...link}>{icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <div css={styles.links}>
          <p>
            <strong>Links</strong>
          </p>
          <ul>
            {links.map(({ label, icon, href }, key) => (
              <li key={key}>
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div css={styles.legals}>
          <p>
            <strong>Legals</strong>
          </p>
          <ul>
            {legals.map(({ label, icon, href }, key) => (
              <li key={key}>
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
    <div css={styles.copyright}>
      <p>
        Sourcier Ltd. is registered in England and Wales company number 8086280.
      </p>
      <p>&copy; 2020 Sourcier Ltd. All Rights Reserved.</p>
      <p>
        <a href="#header">Back to top</a>
      </p>
    </div>
  </React.Fragment>
)

export const Footer = withStyles(styles)(Component)
