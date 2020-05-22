import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { Meta } from '../../Meta'
import { withStyles } from '../../withStyles'
import { getBlogList } from '../../../store/reducers/blog'
import styles from './styles'
import BlogPostSkeleton from '../../ui/BlogPostSkeleton'

const BlogList = ({ posts, state, getBlogList, styles }) => {
  useEffect(() => {
    getBlogList()
  }, [])

  const renderEmpty = () => (
    <div css={styles.empty}>There are no posts yet.</div>
  )

  const renderPosts = () => {
    if (isEmpty(posts)) {
      return renderEmpty()
    } else {
      return posts.map((post) => (
        <div key={post.id} css={styles.blogListItem}>
          <h2>
            <Link to={`/${post.id}`}>{post.title}</Link>
          </h2>
          <ReactMarkdown>{post.summary}</ReactMarkdown>
          <Link to={`/${post.id}`}>Read Post</Link>
        </div>
      ))
    }
  }

  return (
    <>
      <Meta title='blog' />
      <div css={styles.blogList}>
        {state === 'fetched' ? renderPosts() : <BlogPostSkeleton />}
      </div>
    </>
  )
}

const mapStateToProps = ({
  blog: {
    blogList: { state, posts }
  }
}) => ({
  posts,
  state
})

const mapDispatchToProps = { getBlogList }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(BlogList)
