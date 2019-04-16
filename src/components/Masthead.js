import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import logo from '../logo.svg'

export class Masthead extends React.Component {
    state = {
        isActive: false,
    }

    toggleMenu = () => {
        this.setState({ isActive: !this.state.isActive })
    }

    closeMenu = () => this.setState({ isActive: false })

    render() {
        const { isActive } = this.state
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/" onClick={this.closeMenu}>
                    <img src={logo} width="48" alt="Sourcier" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleMenu}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className={classnames('navbar-collapse', {
                        collapse: !isActive,
                    })}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                                onClick={this.closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/blog"
                                onClick={this.closeMenu}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
