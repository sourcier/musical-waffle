import sgMail from "@sendgrid/mail"
import * as Sentry from "@sentry/node"

import { success, failure } from "./libs/response"

Sentry.init({ dsn: process.env.SENTRY_DSN })
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default (event, context) =>
  Promise.resolve(JSON.parse(event.body))
    .then(({ message, from, subject }) =>
      sgMail.send({
        to: process.env.SENDGRID_EMAIL_TO,
        from: process.env.SENDGRID_EMAIL_FROM,
        subject: `${subject}`,
        text: message,
        replyTo: from,
      })
    )
    .then(() => success(null))
    .catch((e) => {
      Sentry.captureException(e)
      return failure({ ...e })
    })
