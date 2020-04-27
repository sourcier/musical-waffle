import client from './amplify'

export const getPosts = () =>
  Promise.resolve()
    .then(() => client.get('posts', '/posts'))
    .then((posts) => posts)

export const getPost = (slug) =>
  Promise.resolve()
    .then(() => client.get('posts', `/posts/${slug}`))
    .then((post) => post)
