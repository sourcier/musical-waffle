import React from "react"

import { Hero } from "../components/Hero"
import { Meta } from "../components/Meta"

export class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Meta title="Get in touch" />
                <Hero title="Get in touch" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-12">
                                <h2>Headquarters</h2>
                                <p>
                                    86-90 Paul Street <br />
                                    London
                                    <br />
                                    EC2A 4NE
                                </p>
                                <p>
                                    <strong>Email:</strong>{" "}
                                    <a
                                        href="mailto:info@sourcier.uk?Subject=Hello"
                                        target="_top">
                                        info@sourcier.uk
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
