import Amplify, { API, graphqlOperation } from 'aws-amplify'
import config from '../aws-exports'
import * as queries from '../graphql/queries'

Amplify.configure(config)

export const getAllPosts = () =>
    Promise.resolve()
        .then(() => API.graphql(graphqlOperation(queries.listPosts)))
        .then((allPosts) => allPosts.data.listPosts.items)

export const getPostBySlug = (slug) =>
    Promise.resolve()
        .then(() =>
            API.graphql(
                graphqlOperation(queries.listPosts, {
                    $filter: { slug: { eg: slug } },
                })
            )
        )
        .then((allPosts) => allPosts.data.listPosts.items[0])
