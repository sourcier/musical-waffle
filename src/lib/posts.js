import Amplify, { API } from 'aws-amplify'
import config from '../aws-exports'
import * as queries from '../graphql/queries'

Amplify.configure(config)

export const getAllPosts = () =>
    Promise.resolve()
        .then(() =>
            API.graphql({
                query: queries.listPosts,
                authMode: 'API_KEY',
            })
        )
        .then((allPosts) => allPosts.data.listPosts.items)

export const getPostBySlug = (slug) =>
    Promise.resolve()
        .then(() =>
            API.graphql({
                query: queries.listPosts,
                variables: { $filter: { slug: { eg: slug } } },
                authMode: 'API_KEY',
            })
        )
        .then((allPosts) => allPosts.data.listPosts.items[0])
