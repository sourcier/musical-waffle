import React from 'react'
import PropTypes from 'prop-types'

export class Hero extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string,
    }

    render() {
        const { title, subTitle } = this.props
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{title}</h1>
                    {subTitle && <p className="lead">{subTitle}</p>}
                </div>
            </div>
        )
    }
}
