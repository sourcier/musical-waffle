import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export class Masthead extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui top fixed menu">
          <Link className="item" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link className="item" to="/blog">
            Blog
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
