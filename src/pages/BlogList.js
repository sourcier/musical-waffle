import React from "react";
import { isEmpty } from "lodash";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { getPosts } from "../api/Posts";

export class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: props.posts
    };
  }

  static defaultProps = {
    posts: []
  };

  async componentDidMount() {
    const posts = await getPosts();
    this.setState({ posts, loading: false });
  }

  renderPosts = () => {
    return this.state.posts.map((post, key) => (
      <div className="col-12 col-sm-6" key={key}>
        <div className="card mb-3">
          <div className="card-body">
            <h1 className="card-title">{post.title}</h1>
            <hr />
            <ReactMarkdown source={post.content} />
            <Link to="/blog/some-article" className="card-link">
              View
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  renderEmpty = () => {
    return (
      <div className="col-12">
        <div className="card bg-light text-center">
          <div className="card-body">
            <h5 className="card-title">There are no posts yet.</h5>
          </div>
        </div>
      </div>
    );
  };

  renderLoading = () => {
    return (
      <div className="col-12">
        <div className="d-flex justify-content-center">
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { posts, loading } = this.state;

    return (
      <React.Fragment>
        <Hero title="Blog" />
        <div className="container">
          <div className="row">
            {loading
              ? this.renderLoading()
              : isEmpty(posts)
              ? this.renderEmpty()
              : this.renderPosts()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
