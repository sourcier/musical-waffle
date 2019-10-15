import React from 'react'

export const Header = () => (
    <header id="header">
        <div id="topbar">
            <div className="container">
                <div className="social-links">
                    <a href="#" className="twitter">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="linkedin">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#" className="instagram">
                        <i className="fa fa-instagram"></i>
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
