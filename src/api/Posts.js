import Parse from './Parse'

const Post = Parse.Object.extend('Post')

export const getPosts = async () => {
    const query = new Parse.Query(Post)
    const posts = await query.find()
    return posts.map((post) => post.toJSON())
}

export const getPostBySlug = async (slug) => {
    const query = new Parse.Query(Post)
    query.equalTo('slug', slug)
    const post = await query.first()
    return post.toJSON()
}
