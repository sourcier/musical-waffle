import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { withStyles } from '../withStyles'
import styles from '../routes/Blog/styles'

const BlogPostSkeleton = (styles, theme) => {
  return (
    <>
      <div css={styles.blogListItem}>
        <h2>
          <Skeleton width='50%' />
        </h2>
        <p><Skeleton count='3' /></p>
        <Skeleton width='25%' />
      </div>
    </>
  )
}

export default withStyles(styles)(BlogPostSkeleton)
