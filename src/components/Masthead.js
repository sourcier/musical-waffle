import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export class Masthead extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-fixed-top is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} width="30" alt="logo" />
          </Link>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
