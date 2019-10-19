import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { Spinner } from '../components/Spinner'
import { Meta } from '../components/Meta'
import { getBlogPost } from '../store/reducers/blog'

import './BlogPost.css'

export class BlogPost extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        getBlogPost: PropTypes.func.isRequired,
        state: PropTypes.string,
        post: PropTypes.object,
    }

    componentDidMount() {
        this.props.getBlogPost(this.props.match.params.slug)
    }

    renderPost = () => {
        const { post } = this.props
        return (
            <React.Fragment>
                <Meta title={post.title} />
                <section id="blog-post">
                    <div className="container">
                        <div className="row feature-item">
                            <div className="col-lg-6 wow fadeInUp">
                                <img
                                    src="/img/features-1.svg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                                <h4>{post.title}</h4>
                                <ReactMarkdown source={post.content} />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

    render() {
        const { state } = this.props
        return (
            <React.Fragment>
                {'fetching' === state ? <Spinner /> : this.renderPost()}
            </React.Fragment>
        )
    }
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
)(BlogPost)
