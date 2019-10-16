import React from 'react'

export const Header = () => (
    <header id="header">
        <div id="topbar">
            <div className="container">
                <div className="social-links">
                    <a
                        href="https://twitter.com/sourcier"
                        className="twitter"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/sourcier/"
                        className="github"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                    </a>
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
                <ul>
                    <li>
                        <a href="#intro">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#team">Team</a>
                    </li>
                    <li>
                        <a href="#footer">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)
