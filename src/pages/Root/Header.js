import React from 'react'
import classnames from 'classnames'
import { lowerCase } from 'lodash'

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobileNavActive: false,
        }
    }

    links = [
        { label: 'Home', href: '#intro' },
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Team', href: '#team' },
        { label: 'Contact Us', href: '#footer' },
    ]

    socials = [
        { label: 'Twitter', href: 'https://twitter.com/sourcier' },
        { label: 'Github', href: 'https://github.com/sourcier/' },
    ]

    componentDidMount() {
        document.addEventListener('click', this.closeMobileMenu)
    }

    toggleMobileNav = () => {
        this.setState({ isMobileNavActive: !this.state.isMobileNavActive })
        document.body.classList.toggle('mobile-nav-active')
    }

    closeMobileMenu = (e) => {
        if (
            !this.mobileNav.contains(e.target) &&
            !this.mobileNavToggle.contains(e.target)
        ) {
            if (document.body.classList.contains('mobile-nav-active')) {
                this.setState({ isMobileNavActive: false })
                document.body.classList.remove('mobile-nav-active')
            }
        }
    }

    renderLinks = ({ links, onClick }) => {
        const props = onClick ? { onClick } : {}

        return (
            <ul>
                {links.map(({ href, label }, key) => (
                    <li key={key}>
                        <a href={href} {...props}>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        const { isMobileNavActive } = this.state

        return (
            <React.Fragment>
                <button
                    type="button"
                    className="mobile-nav-toggle d-lg-none"
                    onClick={() => this.toggleMobileNav()}
                    ref={(el) => (this.mobileNavToggle = el)}>
                    <i
                        className={classnames(
                            'fa',
                            { 'fa-bars': !isMobileNavActive },
                            { 'fa-times': isMobileNavActive }
                        )}
                    />
                </button>
                <header id="header">
                    <div id="topbar">
                        <div className="container">
                            <div className="social-links">
                                {this.socials.map(({ label, href }, key) => (
                                    <a
                                        key={key}
                                        href={href}
                                        className={lowerCase(label)}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <i
                                            className={`fa fa-${lowerCase(
                                                label
                                            )}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="logo float-left">
                            <h1 className="text-light">
                                <a href="#intro" className="scrollto">
                                    <span>Sourcier</span>
                                </a>
                            </h1>
                        </div>
                        <nav className="main-nav float-right d-none d-lg-block">
                            {this.renderLinks({ links: this.links })}
                        </nav>
                    </div>
                </header>
                <nav
                    className="mobile-nav d-lg-none"
                    ref={(el) => (this.mobileNav = el)}>
                    {this.renderLinks({
                        links: [...this.links],
                        onClick: this.toggleMobileNav,
                    })}
                </nav>
                <div
                    className="mobile-nav-overly"
                    style={{
                        display: isMobileNavActive ? 'block' : 'none',
                    }}></div>
            </React.Fragment>
        )
    }
}
