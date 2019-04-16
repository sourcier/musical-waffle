import React from "react";
import ReactMarkdown from "react-markdown";
import { Hero } from "../components/Hero";
import { Spinner } from "../components/Spinner";
import { getPostBySlug } from "../api/Posts";

export class BlogPost extends React.Component {
  state = {
    loading: true,
    post: null
  };

  async componentDidMount() {
    const { match } = this.props;
    const post = await getPostBySlug(match.params.slug);
    this.setState({ post, loading: false });
  }

  renderPost = () => {
    const { post } = this.state;
    return (
      <React.Fragment>
        <Hero title={post.title} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ReactMarkdown source={post.content} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { loading, post } = this.state;
    return (
      <React.Fragment>
        {loading ? <Spinner /> : this.renderPost()}
      </React.Fragment>
    );
  }
}
