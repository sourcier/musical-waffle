import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import { withStyles } from '../../withStyles'
import { required, email } from '../../../libs/validators'
import InputField from '../../ui/InputField/InputField'
import { sendEmail } from '../../../store/reducers/mail'
// import { Auth } from '../../../libs/amplify'
import styles from './styles'

export const Form = ({ styles, sendEmail }) => {
  const history = useHistory()
  const [form, updateForm] = useState({
    disabled: () => validateForm(),
    sending: false,
    fields: {
      email: {
        type: 'email',
        label: 'Email',
        value: '',
        error: false,
        validator: email('Your email is not a valid email address'),
      },
      password: {
        type: 'password',
        label: 'Password',
        value: '',
        error: false,
        validator: required('Your name is required'),
      },
    },
  })

  const validateForm = () =>
    0 !==
    Object.entries(form.fields).reduce(
      (pv, [key, { validator, value }]) =>
        validator && validator(value) ? pv + 1 : pv,
      0
    )

  const handleChange = ({ target: { name, value } }) => {
    const newValues = { ...form }
    newValues.fields[name].value = value
    newValues.fields[name].error = newValues.fields[name].validator
      ? newValues.fields[name].validator(value)
      : null
    updateForm(newValues)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateForm({ ...form, sending: true })
    // Auth.signUp({
    //   username: form.fields.email.value,
    //   password: form.fields.password.value
    // }).then(response => {
    history.push('/sign-up/confirm')
    // })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {Object.entries(form.fields).map(([key, field]) => {
          const { type, label } = field

          return (
            <InputField
              key={key}
              type={type}
              label={label}
              name={key}
              field={field}
              onChange={handleChange}
            />
          )
        })}
        <button
          type="submit"
          disabled={form.disabled() || form.sending}
          css={styles.button}>
          Sign Up{' '}
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

const mapDispatchToProps = { sendEmail }

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
)(Form)
