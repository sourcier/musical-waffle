import Parse from "../../lib/Parse"

const Post = Parse.Object.extend("Post")

const actions = {
    FETCH_POSTS: "fetch/posts",
    FETCH_POSTS_SUCCESS: "fetch/posts/success",
    FETCH_POSTS_FAILURE: "fetch/posts/failure",
}

export const getPosts = () => (dispatch) => {
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

export default (state = { state: "fetching" }, { type, payload }) => {
    switch (type) {
    case actions.FETCH_POSTS:
        return { ...state, state: "fetching" }
    case actions.FETCH_POSTS_SUCCESS:
        return {
            ...state,
            posts: payload,
            state: "fetched",
        }
    case actions.FETCH_POSTS_FAILURE:
        return { ...state, state: "error" }
    default:
        return { ...state }
    }
}
