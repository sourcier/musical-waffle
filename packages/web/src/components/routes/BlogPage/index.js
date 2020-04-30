import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import { Meta } from '../../Meta'
import Spinner from '../../ui/Spinner'
import { getBlogPost } from '../../../store/reducers/blog'
import { withStyles } from '../../withStyles'
import styles from './styles'

export const BlogPage = ({
  post,
  state,
  getBlogPost,
  styles,
  match: {
    params: { slug },
  },
}) => {
  const renderPost = () => {
    return (
      <React.Fragment>
        <Meta title={post.title} />
        <div>
          <h2>{post.title}</h2>
          <ReactMarkdown source={post.summary} />
          <ReactMarkdown source={post.content} />
        </div>
      </React.Fragment>
    )
  }

  useEffect(() => {
    getBlogPost(slug)
  }, [])

  return (
    <div css={styles.blogPost}>
      {'fetching' === state ? <Spinner /> : renderPost()}
    </div>
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
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(BlogPage)
