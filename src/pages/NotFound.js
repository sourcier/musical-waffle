import React from "react"

import { Hero } from "../components/Hero"
import { Meta } from "../components/Meta"

export class NotFound extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Meta title="Page not found" />
                <Hero title="Oops!" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            The page you were looking for could not be found.
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
