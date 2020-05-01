import React from 'react'

import { withStyles } from '../../withStyles'
import styles from './styles'

export const InputField = ({
  type,
  styles,
  value,
  error,
  onChange,
  name,
  label,
  help,
}) => {
  const params = {
    value,
    name,
    onChange,
    onBlur: onChange,
  }

  return (
    <fieldset css={styles.fieldset}>
      <label>
        <p css={styles.label}>{label}</p>
        {help && <p css={styles.help}>{help}</p>}
        {type === 'textarea' && (
          <textarea {...params} css={styles.textarea}></textarea>
        )}
        {type === 'text' && <input {...params} css={styles.input} />}
        {error && <p css={styles.error}>{error}</p>}
      </label>
    </fieldset>
  )
}

export default withStyles(styles)(InputField)
