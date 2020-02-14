import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import { Spinner } from '../../components/Spinner'
import { Meta } from '../../components/Meta'
import { getBlogPost } from '../../store/reducers/blog'
import Hero from '../../components/Hero'

import './style.css'

export const BlogPage = ({
    post,
    state,
    getBlogPost,
    match: {
        params: { slug },
    },
}) => {
    const renderPost = () => {
        return (
            <React.Fragment>
                <Meta title={post.title} />
                <Hero>
                    <h2>{post.title}</h2>
                </Hero>
                <section id="blog-post">
                    <div className="container">
                        <div className="row feature-item">
                            <div className="col-lg-12 wow fadeInUp pt-lg-0">
                                <ReactMarkdown source={post.body} />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

    useEffect(() => {
        getBlogPost(slug)
    }, [])

    return (
        <React.Fragment>
            {'fetching' === state ? <Spinner /> : renderPost()}
        </React.Fragment>
    )
}

const mapStateToProps = ({
    blog: {
        blogPost: { state, post },
    },
}) => ({
    post,
    state,
})

const mapDispatchToProps = { getBlogPost }

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(BlogPage)
