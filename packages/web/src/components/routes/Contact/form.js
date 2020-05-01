import React, { useState } from 'react'
// import set from "lodash/set"
// import cloneDeep from 'lodash/cloneDeep'

import { withStyles } from '../../withStyles'
import { required, email } from '../../../libs/validators'
import styles from './styles'

export const Form = ({ styles }) => {
  const [form, updateForm] = useState({
    error: false,
    fields: {
      message: { value: '', error: false, validator: required },
      name: { value: '', error: false, validator: required },
      email: { value: '', error: false, validator: email },
    },
  })

  const validateForm = () => {
    const errors = Object.entries(form.fields).reduce((pv, [key, field]) => {
      return field.error === true ? pv + 1 : pv
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
    console.error(event)
    event.preventDefault()
  }

  return (
    <div css={styles.form}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p css={styles.label}>What’s up?</p>
            <p css={styles.help}>
              Feel free to type as much or as little as you like.
            </p>
            <textarea
              name="message"
              value={form.fields.message.value}
              onChange={handleChange}
              onBlur={handleChange}>
              {form.message}
            </textarea>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p css={styles.label}>What’s your name?</p>
            <input
              type="text"
              name="name"
              value={form.fields.name.value}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p css={styles.label}>What’s your email address?</p>
            <input
              type="email"
              name="email"
              value={form.fields.email.value}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </label>
        </fieldset>
        <button type="submit" disabled={form.error}>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default withStyles(styles)(Form)
