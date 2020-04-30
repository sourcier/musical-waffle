import { API } from './amplify'

export const getPosts = () =>
  Promise.resolve()
    .then(() => API.get('posts', '/posts'))
    .then((posts) => posts)

export const getPost = (slug) =>
  Promise.resolve()
    .then(() => API.get('posts', `/posts/${slug}`))
    .then((post) => post)
