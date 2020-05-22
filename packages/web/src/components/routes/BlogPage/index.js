import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown/with-html'

import { Meta } from '../../Meta'
import { getBlogPost } from '../../../store/reducers/blog'
import { withStyles } from '../../withStyles'
import styles from './styles'
import NotFound from '../NotFound'
import Comments from './Comments'
import BlogPostSkeleton from '../../ui/BlogPostSkeleton'

export const BlogPage = ({
  post,
  state,
  getBlogPost,
  styles,
  match: {
    params: { slug }
  }
}) => {
  const renderPost = () => {
    return (
      <>
        <Meta title={post.title} />
        <div>
          <h2>{post.title}</h2>
          <ReactMarkdown escapeHtml={false} source={post.content} />
          <Comments />
        </div>
      </>
    )
  }

  useEffect(() => {
    getBlogPost(slug)
  }, [slug])

  return (
    <>
      <div css={styles.blogPost}>
        {state === 'fetching' && <BlogPostSkeleton />}
        {state === 'fetched' && renderPost()}
        {state === 'error' && <NotFound />}
      </div>
    </>
  )
}

const mapStateToProps = ({
  blog: {
    blogPost: { state, post }
  }
}) => ({
  post,
  state
})

const mapDispatchToProps = { getBlogPost }

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(BlogPage)
