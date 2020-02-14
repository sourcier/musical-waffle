import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Spinner } from '../../components/Spinner'
import { Meta } from '../../components/Meta'
import { getBlogPost } from '../../store/reducers/blog'
import Hero from '../../components/Hero'

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
                <Container className="my-5">
                    <Row>
                        <Col>
                            <div className="blog-post">
                                <h2 className="blog-post-title">
                                    {post.title}
                                </h2>
                                <ReactMarkdown source={post.body} />
                            </div>
                        </Col>
                    </Row>
                </Container>
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
