import React from 'react'

import intoImage from './intro-img.svg'

export const Hero = ({ children }) => (
    <section id="intro" className="clearfix">
        <div className="container d-flex h-100">
            <div className="row justify-content-center align-self-center">
                <div className="col-md-6 intro-info order-md-first order-last">
                    {children}
                </div>
                <div className="col-md-6 intro-img order-md-last order-first">
                    <img src={intoImage} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
)

export default Hero
