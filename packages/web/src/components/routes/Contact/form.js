import React, { useState } from 'react'

import { withStyles } from '../../withStyles'
import { required, email } from '../../../libs/validators'
import InputField from '../../ui/InputField/InputField'
import styles from './styles'

export const Form = ({ styles }) => {
  const [form, updateForm] = useState({
    error: false,
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
        validator: email('Your email is required'),
      },
    },
  })

  const validateForm = () => {
    const errors = Object.entries(form.fields).reduce((pv, [key, field]) => {
      return field.error ? pv + 1 : pv
    }, 0)
    updateForm({ ...form, error: 0 !== errors })
  }

  const handleChange = ({ target: { name, value } }) => {
    const newValues = { ...form }
    newValues.fields[name].value = value
    newValues.fields[name].error = newValues.fields[name].validator(value)

    updateForm(newValues)
    validateForm()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
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
        <button type="submit" disabled={form.error} css={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default withStyles(styles)(Form)
