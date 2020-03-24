import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { Spinner } from '../../components/Spinner'
import { Meta } from '../../components/Meta'
import { getBlogList } from '../../store/reducers/blog'

import './styles.css'

const BlogList = ({ posts, state, getBlogList }) => {
    const renderPosts = () => {
        if ('fetched' === state) {
            if (isEmpty(posts)) {
                return renderEmpty()
            } else {
                return posts.map((post, key) => (
                    <Card key={post.id}>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                <ReactMarkdown>{post.summary}</ReactMarkdown>
                            </Card.Text>
                            <Button
                                variant="primary"
                                href={`/blog/${post.slug}`}>
                                View
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small>
                                Last updated {moment(post.updatedAt).fromNow()}
                            </small>
                        </Card.Footer>
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
            <Container className="my-5">
                <Row>
                    <Col>
                        <h1 className="display-4">Blog</h1>
                    </Col>
                </Row>
                <Row className="my-5">
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
