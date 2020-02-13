import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import { Spinner } from '../../components/Spinner'
import { Meta } from '../../components/Meta'
import { getBlogPost } from '../../store/reducers/blog'
import Hero from '../../components/Hero'

const BlogPost = (props) => {
    const { dispatch } = props
    const router = useRouter()
    const { post, state } = useSelector((state) => state.blog.blogPost)

    useEffect(() => {
        getBlogPost(router.query.slug)(dispatch)
    }, [router.query.slug, dispatch])

    const renderPost = () => {
        return (
            <React.Fragment>
                <Meta title={post.title} />
                <Hero>
                    <h2>{post.title}</h2>
                </Hero>
                <section id="blog-post">
                    <div className="container">
                        <div className="row feature-item">
                            <div className="col-lg-12 wow fadeInUp pt-lg-0">
                                <ReactMarkdown source={post.body} />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {'fetching' === state ? <Spinner /> : renderPost()}
        </React.Fragment>
    )
}

export default connect()(BlogPost)
