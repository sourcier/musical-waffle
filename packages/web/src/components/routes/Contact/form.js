import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import { withStyles } from '../../withStyles'
import { required, email } from '../../../libs/validators'
import InputField from '../../ui/InputField/InputField'
import styles from './styles'

export const Form = ({ styles }) => {
  const [form, updateForm] = useState({
    disabled: () => validateForm(),
    sending: false,
    fields: {
      message: {
        value: '',
        error: false,
        validator: required('Your message is required'),
      },
      name: {
        value: '',
        error: false,
        validator: required('Your name is required'),
      },
      email: {
        value: '',
        error: false,
        validator: email('Your email is not a valid email address'),
      },
    },
  })

  const validateForm = () =>
    0 !==
    Object.entries(form.fields).reduce(
      (pv, [key, { validator, value }]) => (validator(value) ? pv + 1 : pv),
      0
    )

  const handleChange = ({ target: { name, value } }) => {
    const newValues = { ...form }
    newValues.fields[name].value = value
    newValues.fields[name].error = newValues.fields[name].validator(value)
    updateForm(newValues)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateForm({ ...form, sending: true })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          type="textarea"
          label="What’s up?"
          help="Type as much or as little as you like."
          name="message"
          field={form.fields.message}
          onChange={handleChange}
        />
        <InputField
          type="text"
          label="What’s your name?"
          name="name"
          field={form.fields.name}
          onChange={handleChange}
        />
        <InputField
          type="text"
          label="What’s your email address?"
          name="email"
          field={form.fields.email}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={form.disabled() || form.sending}
          css={styles.button}>
          Send Message{' '}
          {form.sending && (
            <span css={styles.buttonIcon}>
              <FontAwesomeIcon icon={faCircleNotch} spin />
            </span>
          )}
        </button>
      </form>
    </div>
  )
}

export default withStyles(styles)(Form)
