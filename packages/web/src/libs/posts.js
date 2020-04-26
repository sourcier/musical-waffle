import client from './amplify'

export const getPosts = () =>
  Promise.resolve()
    .then(() => client.get('posts', '/posts'))
    .then((posts) => posts)
