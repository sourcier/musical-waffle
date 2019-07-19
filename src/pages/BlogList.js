import React from "react"
import { isEmpty } from "lodash"
import ReactMarkdown from "react-markdown"
import { Link } from "react-router-dom"

import { Hero } from "../components/Hero"
import { Spinner } from "../components/Spinner"
// import { getPosts } from "../api/Posts"
import { Meta } from "../components/Meta"

export class BlogList extends React.Component {
    state = {
        loading: true,
        posts: [],
    }

    // async componentDidMount() {
    //     const posts = await getPosts()
    //     this.setState({ posts, loading: false })
    // }

    renderPosts = () => {
        return this.state.posts.map((post, key) => (
            <div className="col-12 col-sm-6" key={key}>
                <div className="card mb-3">
                    <div className="card-body">
                        <h1 className="card-title">{post.title}</h1>
                        <hr />
                        <ReactMarkdown source={post.content} />
                        <Link
                            to={`/blog/${post.slug}`}
                            className="btn btn-primary">
                            View
                        </Link>
                    </div>
                </div>
            </div>
        ))
    }

    renderEmpty = () => {
        return (
            <div className="col-12">
                <div className="card bg-light text-center">
                    <div className="card-body">
                        <h5 className="card-title">There are no posts yet.</h5>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { posts, loading } = this.state

        return (
            <React.Fragment>
                <Meta title="Blog" />
                <Hero title="Blog" />
                <div className="container">
                    <div className="row">
                        {loading ? (
                            <Spinner />
                        ) : isEmpty(posts) ? (
                            this.renderEmpty()
                        ) : (
                            this.renderPosts()
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
