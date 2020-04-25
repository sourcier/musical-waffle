import React from 'react'

import styles from './styles'
import { withStyles } from '../../withStyles'

const Header = ({ styles }) => <div css={styles.header} />

export default withStyles(styles)(Header)
