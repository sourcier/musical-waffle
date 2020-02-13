import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import { Spinner } from '../../components/Spinner'
import { Meta } from '../../components/Meta'
import { getBlogList } from '../../store/reducers/blog'
import Hero from '../../components/Hero'

import './style.css'

const BlogList = ({ posts, state, getBlogList }) => {

    const renderPosts = () => {
        if ('fetched' === state) {
            if (isEmpty(posts)) {
                return renderEmpty()
            } else {
                return posts.map((post, key) => (
                    <div className="box" key={key}>
                        <h4 className="title">
                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                        </h4>
                        <a
                            href={`/blog/${post.slug}`}
                            className="btn btn-primary">
                            Read Now
                        </a>
                    </div>
                ))
            }
        } else {
            return <Spinner />
        }
    }

    const renderEmpty = () => {
        return (
            <div className="box">
                <h4 className="title">There are no posts yet.</h4>
            </div>
        )
    }

    useEffect(() => {
        getBlogList()
    }, [])

    return (
        <React.Fragment>
            <Meta title="Blog" />
            <Hero>
                <h2>Blog</h2>
            </Hero>
            <section id="blog" className="section-bg">
                <div className="container">
                    <div className="row">{renderPosts()}</div>
                </div>
            </section>
            <section id="call-to-action" />
        </React.Fragment>
    )
}

const mapStateToProps = ({
    blog: {
        blogList: { state, posts },
    },
}) => ({
    posts,
    state,
})

const mapDispatchToProps = { getBlogList }

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(BlogList)
