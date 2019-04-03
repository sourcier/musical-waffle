import React from "react";

export class Hero extends React.Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <section className="hero is-dark is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
            {subTitle && <h2 className="subtitle">{subTitle}</h2>}
          </div>
        </div>
      </section>
    );
  }
}
