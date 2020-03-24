/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
    query GetPost($id: ID!) {
        getPost(id: $id) {
            id
            slug
            title
            body
            summary
            status
            version
            createdAt
            updatedAt
            deletedAt
            owner
        }
    }
`
export const listPosts = /* GraphQL */ `
    query ListPosts(
        $filter: ModelPostFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                slug
                title
                body
                summary
                status
                version
                createdAt
                updatedAt
                deletedAt
                owner
            }
            nextToken
        }
    }
`
export const getPostBySlug = /* GraphQL */ `
    query GetPostBySlug(
        $slug: String
        $sortDirection: ModelSortDirection
        $filter: ModelPostFilterInput
        $limit: Int
        $nextToken: String
    ) {
        getPostBySlug(
            slug: $slug
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                slug
                title
                body
                summary
                status
                version
                createdAt
                updatedAt
                deletedAt
                owner
            }
            nextToken
        }
    }
`
export const listPostsByStatus = /* GraphQL */ `
    query ListPostsByStatus(
        $status: String
        $createdAt: ModelStringKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelPostFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listPostsByStatus(
            status: $status
            createdAt: $createdAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                slug
                title
                body
                summary
                status
                version
                createdAt
                updatedAt
                deletedAt
                owner
            }
            nextToken
        }
    }
`
