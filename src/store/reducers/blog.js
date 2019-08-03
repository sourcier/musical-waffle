import Parse from "../../lib/Parse"

const Post = Parse.Object.extend("Post")

const actions = {
    FETCH_POSTS: "fetch/posts",
    FETCH_POSTS_SUCCESS: "fetch/posts/success",
    FETCH_POSTS_FAILURE: "fetch/posts/failure",
    FETCH_POST: "fetch/post",
    FETCH_POST_SUCCESS: "fetch/post/success",
    FETCH_POST_FAILURE: "fetch/post/failure",
}

export const getBlogList = () => (dispatch) => {
    return Promise.resolve()
        .then(() => dispatch({ type: actions.FETCH_POSTS }))
        .then(() => new Parse.Query(Post).find())
        .then((posts) => posts.map((post) => post.toJSON()))
        .then((posts) =>
            dispatch({ type: actions.FETCH_POSTS_SUCCESS, payload: posts })
        )
        .catch((error) => {
            dispatch({ type: actions.FETCH_POSTS_FAILURE, payload: error })
        })
}

export const getBlogPost = (slug) => (dispatch) => {
    return Promise.resolve()
        .then(() => dispatch({ type: actions.FETCH_POST }))
        .then(() => new Parse.Query(Post).equalTo("slug", slug).first())
        .then((post) => post.toJSON())
        .then((post) =>
            dispatch({ type: actions.FETCH_POST_SUCCESS, payload: post })
        )
        .catch((error) => {
            dispatch({ type: actions.FETCH_POST_FAILURE, payload: error })
        })
}

const initialState = {
    blogList: { state: "fetching" },
    blogPost: { state: "fetching" },
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case actions.FETCH_POSTS:
        return { ...state, blogList: { state: "fetching" } }
    case actions.FETCH_POST:
        return { ...state, blogPost: { state: "fetching" } }
    case actions.FETCH_POSTS_SUCCESS:
        return {
            ...state,
            blogList: {
                posts: payload,
                state: "fetched",
            },
        }
    case actions.FETCH_POST_SUCCESS:
        return {
            ...state,
            blogPost: {
                post: payload,
                state: "fetched",
            },
        }
    case actions.FETCH_POSTS_FAILURE:
        return { ...state, blogList: { state: "error" } }
    case actions.FETCH_POST_FAILURE:
        return { ...state, blogPost: { state: "error" } }
    default:
        return { ...state }
    }
}
