import sgMail from "@sendgrid/mail"

import { success, failure } from "./libs/response"

export default (event, context) =>
  Promise.resolve(JSON.parse(event.body))
    .then(({message, from, subject}) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)

      const msg = {
        to: process.env.SENDGRID_EMAIL_TO,
        from: process.env.SENDGRID_EMAIL_FROM,
        subject: `${subject}`,
        text: message,
        replyTo: from
      }

      sgMail.send(msg).then(() => success(null))
    })
    .catch((e) => {
      return failure({ status: false })
    })
