import React from 'react'
import { Socials } from './Socials'
import { Navigation } from './Navigation'

export const Footer = ({ children }) => (
    <footer id="footer" className="section-bg">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="footer-info">
                                    <h3>
                                        <a href="/" className="scrollto">
                                            Sourcier
                                        </a>
                                    </h3>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="footer-links">
                                    <h4>Useful Links</h4>
                                    <Navigation omit={['Contact Us']} />
                                </div>

                                <div className="footer-links">
                                    <h4>Contact Us</h4>
                                    <p>
                                        Sourcier Ltd. <br />
                                        86-90 Paul Street <br />
                                        London
                                        <br />
                                        United Kingdom <br />
                                        {/* <strong>Phone:</strong> +1 5589 55488 55 */}
                                        {/* <br /> */}
                                        <strong>Email:</strong>{' '}
                                        <a href="mailto:info@soucier.uk">
                                            info@soucier.uk
                                        </a>
                                        <br />
                                    </p>
                                </div>

                                <div className="social-links">
                                    <Socials />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-lg-6">
                        <div className="form">
                            <h4>Send us a message</h4>
                            <form
                                action=""
                                method="post"
                                role="form"
                                className="contactForm">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                    />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        data-rule="email"
                                        data-msg="Please enter a valid email"
                                    />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 8 chars of subject"
                                    />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows="5"
                                        data-rule="required"
                                        data-msg="Please write something for us"
                                        placeholder="Message"></textarea>
                                    <div className="validation"></div>
                                </div>

                                <div id="sendmessage">
                                    Your message has been sent. Thank you!
                                </div>
                                <div id="errormessage"></div>

                                <div className="text-center">
                                    <button type="submit" title="Send Message">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong>Sourcier Ltd</strong>. All Rights
                Reserved <br />
                Sourcier Ltd. is registered in England and Wales company number
                8086280
            </div>
        </div>
    </footer>
)
