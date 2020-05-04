import React from 'react'
import { FacebookProvider, Comments as FacbookComments } from 'react-facebook'
import config from '../../../../libs/config'

import { withStyles } from '../../../withStyles'
import styles from './styles'

const Comments = ({ styles }) => {
  return (
    <div css={styles.comments}>
      <h3>Join the discussion</h3>
      <FacebookProvider appId={config.facebook.appId}>
        <FacbookComments width="100%" />
      </FacebookProvider>
    </div>
  )
}

export default withStyles(styles)(Comments)
