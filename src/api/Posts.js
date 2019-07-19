import Parse from "./Parse"

const Post = Parse.Object.extend("Post")

export const getPosts = () => {
    return new Parse.Query(Post)
        .find()
        .then((posts) => posts.map((post) => post.toJSON()))
}

export const getPostBySlug = (slug) => {
    return new Parse.Query(Post)
        .equalTo("slug", slug)
        .first()
        .then((post) => post.toJSON())
}
