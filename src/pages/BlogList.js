import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";

export class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts
    };
  }

  static defaultProps = {
    posts: []
  };

  componentDidMount() {
    this.setState({
      posts: [
        { title: "title1", body: "body1" },
        { title: "title1", body: "body1" },
        { title: "title1", body: "body1" }
      ]
    });
  }

  renderPosts = () => {
    return this.state.posts.map((post, key) => (
      <div className="column is-half" key={key}>
        <div className="card">
          <div className="card-content">
            <p className="title">{post.title}</p>
            <p>{post.body}</p>
            {/* <p className="subtitle">Jeff Atwood</p> */}
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <Link className="button is-primary" to="/blog/some-article">
                Read more
              </Link>
            </div>
          </footer>
        </div>
      </div>
    ));
  };

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <Hero title="Blog" />
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {!posts.length && (
                <div className="column">
                  <div className="notification">
                    <p>There are no posts to display</p>
                  </div>
                </div>
              )}
              {posts.length && this.renderPosts()}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
