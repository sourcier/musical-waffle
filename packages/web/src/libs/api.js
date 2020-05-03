import { API } from './amplify'

export const getPosts = () => API.get('posts', '/posts').then((posts) => posts)

export const getPost = (slug) =>
  API.get('posts', `/posts/${slug}`).then((post) => post)

export const sendMail = (subject, from, message) =>
  API.post('mail', `/mail`, {
    body: {
      subject,
      from,
      message,
    },
  })
