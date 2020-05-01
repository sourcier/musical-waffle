import React from 'react'

import { withStyles } from '../../withStyles'
import styles from './styles'

export const Form = ({ styles }) => (
  <div css={styles.form}>
    <form>
      <fieldset>
        <label>
          <p css={styles.label}>What’s up?</p>
          <p css={styles.help}>
            Feel free to type as much or as little as you like.
          </p>
          <textarea />
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p css={styles.label}>What’s your name?</p>
          <input type="text" />
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p css={styles.label}>What’s your email address?</p>
          <input type="text" />
        </label>
      </fieldset>
      <button>Send Message</button>
    </form>
  </div>
)

export default withStyles(styles)(Form)
