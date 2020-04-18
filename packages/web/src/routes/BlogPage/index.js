import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Spinner } from '../../components/Spinner'
import { Meta } from '../../components/Meta'
import { getBlogPost } from '../../store/reducers/blog'

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
        <Container className="my-5">
          <Row>
            <Col>
              <div>
                <h2>{post.title}</h2>
                <p className="text-muted">
                  Last updated {moment(post.updatedAt).fromNow()}
                </p>
                <ReactMarkdown source={post.summary} />
                <hr />
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(BlogPage)
