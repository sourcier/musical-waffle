import React from "react"
import { Hero } from "../components/Hero"

export class About extends React.Component {
    render() {
        return (
            <React.Fragment>
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
                                    <strong>Email:</strong> info@sourcier.uk
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
