import React from "react"
import ReactMarkdown from "react-markdown"
import PropTypes from "prop-types"

import { Hero } from "../components/Hero"
import { Spinner } from "../components/Spinner"
import { getPostBySlug } from "../api/Posts"
import { Meta } from "../components/Meta"

export class BlogPost extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        post: PropTypes.object,
    }
    state = {
        loading: true,
        post: null,
    }

    componentDidMount() {
        getPostBySlug(this.props.match.params.slug).then((post) => {
            this.setState({ post, loading: false })
        })
    }

    renderPost = () => {
        const { post } = this.state
        return (
            <React.Fragment>
                <Meta title={post.title} />
                <Hero title={post.title} />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ReactMarkdown source={post.content} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        const { loading } = this.state
        return (
            <React.Fragment>
                {loading ? <Spinner /> : this.renderPost()}
            </React.Fragment>
        )
    }
}
