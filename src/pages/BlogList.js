import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { Hero } from '../components/Hero'
import { Spinner } from '../components/Spinner'
import { Meta } from '../components/Meta'
import { getBlogList } from '../store/reducers/blog'

export class BlogList extends React.Component {
    static propTypes = {
        getBlogList: PropTypes.func.isRequired,
        state: PropTypes.string,
        posts: PropTypes.array,
    }

    componentDidMount() {
        this.props.getBlogList()
    }

    renderPosts = () => {
        const { posts, state } = this.props

        if ('fetched' === state) {
            if (isEmpty(posts)) {
                return this.renderEmpty()
            } else {
                return posts.map((post, key) => (
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
        } else {
            return <Spinner />
        }
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
        return (
            <React.Fragment>
                <Meta title="Blog" />
                <Hero title="Blog" />
                <div className="container">
                    <div className="row">{this.renderPosts()}</div>
                </div>
            </React.Fragment>
        )
    }
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
