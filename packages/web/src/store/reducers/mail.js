import { sendMail } from '../../libs/api'

const actions = {
  SEND_MAIL: 'send/mail',
  SEND_MAIL_SUCCESS: 'send/mail/success',
  SEND_MAIL_FAILURE: 'send/mail/failure'
}

export const sendEmail = (subject, from, message) => (dispatch) => {
  return Promise.resolve()
    .then(() => dispatch({ type: actions.SEND_MAIL }))
    .then(() => sendMail(subject, from, message))
    .then(() => dispatch({ type: actions.SEND_MAIL_SUCCESS }))
    .catch((error) => {
      console.log(error)
      dispatch({ type: actions.SEND_MAIL_FAILURE })
    })
}

const initialState = {
  mail: { sending: 'idle' }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SEND_MAIL:
      return { ...state, state: 'sending' }
    case actions.SEND_MAIL_SUCCESS:
      return { ...state, state: 'idle' }
    case actions.SEND_MAIL_FAILURE:
      return { ...state, state: 'error' }
    default:
      return { ...state }
  }
}
