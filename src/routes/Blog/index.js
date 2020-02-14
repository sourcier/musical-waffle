import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { Spinner } from '../../components/Spinner'
import { Meta } from '../../components/Meta'
import { getBlogList } from '../../store/reducers/blog'
import Hero from '../../components/Hero'

import './style.css'

const BlogList = ({ posts, state, getBlogList }) => {
    const renderPosts = () => {
        if ('fetched' === state) {
            if (isEmpty(posts)) {
                return renderEmpty()
            } else {
                return posts.map((post, key) => (
                    <Card key={key}>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.title}</Card.Text>
                            <Button
                                variant="primary"
                                href={`/blog/${post.slug}`}>
                                View
                            </Button>
                        </Card.Body>
                    </Card>
                ))
            }
        } else {
            return <Spinner />
        }
    }

    const renderEmpty = () => {
        return (
            <Card>
                <Card.Body>
                    <Card.Text>There are no posts yet.</Card.Text>
                </Card.Body>
            </Card>
        )
    }

    useEffect(() => {
        getBlogList()
    }, [])

    return (
        <React.Fragment>
            <Meta title="Blog" />
            <Hero>
                <h2>Blog</h2>
            </Hero>
            <Container className="my-5">
                <Row>
                    <Col>
                        <CardColumns>{renderPosts()}</CardColumns>
                    </Col>
                </Row>
            </Container>
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
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(BlogList)
