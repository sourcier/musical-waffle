import React, { useEffect, useState } from 'react'
import config from '../../../../libs/config'

import { withStyles } from '../../../withStyles'
import styles from './styles'
import Spinner from '../../../ui/Spinner'

const Comments = ({ styles }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.fbAsyncInit = () => {
      /* eslint-disable no-undef */
      FB.init({
        appId: config.facebook.appId,
        version: 'v7.0'
      })
      FB.XFBML.parse(null, () => {
        setIsLoading(false)
      })
      /* eslint-enable no-use-before-define */
    };

    // Load Facebook SDK asynchronously
    (function (d, s, id) {
      var js; var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  }, [])

  return (
    <div css={styles.comments}>
      {isLoading && <Spinner />}
      {!isLoading && <h3>Join the discussion</h3>}
      <div className='fb-comments' />
    </div>
  )
}

export default withStyles(styles)(Comments)
