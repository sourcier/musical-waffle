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

const BlogList = ({ posts, state, getBlogList, styles }) => {
  useEffect(() => {
    getBlogList()
  }, [])

  const renderEmpty = () => <div>There are no posts yet.</div>

  const renderLoading = () => <div>Fetching posts...</div>

  const renderPosts = () => {
    if (isEmpty(posts)) {
      return renderEmpty()
    } else {
      return posts.map((post, key) => (
        <div key={post.slug} css={styles.blogListItem}>
          <h2>
            <Link to={`/${post.slug}`}>{post.title}</Link>
          </h2>
          <ReactMarkdown>{post.content}</ReactMarkdown>
          <Link to={`/${post.slug}`}>Read Post</Link>
        </div>
      ))
    }
  }

  return (
    <React.Fragment>
      <Meta title="blog" />
      <div css={styles.blogList}>
        {'fetched' === state ? renderPosts(posts) : renderLoading()}
      </div>
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
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(BlogList)
