import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import logo from "../logo.svg";

export class Masthead extends React.Component {
  state = {
    isActive: false
  };

  toggleMenu = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  closeMenu = () => this.setState({ isActive: false });

  render() {
    const { isActive } = this.state;
    return (
      <nav className="navbar is-fixed-top" role="navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} width="30" alt="Sourcier" />
          </Link>
          <button
            className={classnames(
              "navbar-burger",
              "button",
              "is-white",
              "is-radiusless",
              {
                "is-active": isActive
              }
            )}
            onClick={this.toggleMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className={classnames("navbar-menu", { "is-active": isActive })}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/" onClick={this.closeMenu}>
              Home
            </Link>
            <Link className="navbar-item" to="/blog" onClick={this.closeMenu}>
              Blog
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
