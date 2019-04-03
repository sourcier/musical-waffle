import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";

export class BlogList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero title="Blog" />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">
                      “There are two hard things in computer science: cache
                      invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p className="subtitle">Jeff Atwood</p>
                  </div>
                  <footer class="card-footer">
                    <div class="card-footer-item">
                      <Link
                        className="button is-primary"
                        to="/blog/some-article"
                      >
                        Read more
                      </Link>
                    </div>
                  </footer>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">
                      “There are two hard things in computer science: cache
                      invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p className="subtitle">Jeff Atwood</p>
                  </div>
                  <footer class="card-footer">
                    <div class="card-footer-item">
                      <Link
                        className="button is-primary"
                        to="/blog/some-article"
                      >
                        Read more
                      </Link>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
