import { API } from './amplify'

export const getPosts = () =>
  API.get('posts', '/posts').then((response) => response.data)

export const getPost = (slug) =>
  API.get('posts', `/posts/${slug}`).then((response) => response.data)

export const sendMail = (subject, from, message) =>
  API.post('mail', `/mail`, {
    body: {
      subject,
      from,
      message,
    },
  })
