import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

export class Meta extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        const { title } = this.props
        return (
            <Helmet>
                <title>{title ? `${title} - ` : ``}Sourcier</title>
            </Helmet>
        )
    }
}