import React from 'react'
import HyvorTalk from 'hyvor-talk-react'

import { withStyles } from '../../../withStyles'
import styles from './styles'

const Comments = ({ styles }) => {
  return (
    <div css={styles.comments}>
      <HyvorTalk.Embed websiteId={692} />
    </div>
  )
}

export default withStyles(styles)(Comments)
