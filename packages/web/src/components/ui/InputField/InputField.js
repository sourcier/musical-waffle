import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import { withStyles } from '../../withStyles'
import styles from './styles'

export const InputField = ({
  type,
  styles,
  onChange,
  name,
  label,
  help,
  field: { value, error },
}) => {
  const params = {
    type,
    value,
    name,
    onChange,
    onBlur: onChange,
  }

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return <textarea {...params} css={styles.textarea}></textarea>
      default:
        return <input {...params} css={styles.input} />
    }
  }

  return (
    <fieldset css={styles.fieldset}>
      <label>
        <p css={styles.label}>{label}</p>
        {help && <p css={styles.help}>{help}</p>}
        {renderInput()}
        {error && (
          <p css={styles.error}>
            <FontAwesomeIcon icon={faInfoCircle} /> {error}
          </p>
        )}
      </label>
    </fieldset>
  )
}

export default withStyles(styles)(InputField)
