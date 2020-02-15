import { get } from 'lodash'

import client, { AUTH_MODE } from './amplify'
import * as queries from '../graphql/queries'

export const STATUS = {
    DRAFT: 'DRAFT',
    PUBLISHED: 'PUBLISHED',
    DELETED: 'DELETED',
}

export const SORT = {
    ASC: 'ASC',
    DESC: 'DESC',
}

export const getPostsByStatus = () =>
    Promise.resolve()
        .then(() =>
            client.graphql({
                query: queries.listPostsByStatus,
                variables: {
                    status: STATUS.PUBLISHED,
                    sortDirection: SORT.DESC,
                },
                authMode: AUTH_MODE.API_KEY,
            })
        )
        .then((allPosts) => get(allPosts, 'data.listPostsByStatus.items', null))

export const getPostBySlug = (slug) =>
    Promise.resolve()
        .then(() =>
            client.graphql({
                query: queries.getPostBySlug,
                variables: { slug },
                authMode: AUTH_MODE.API_KEY,
            })
        )
        .then((allPosts) => get(allPosts, 'data.getPostBySlug.items[0]', null))
