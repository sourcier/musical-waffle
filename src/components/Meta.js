import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export class Meta extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    }

    render() {
        const { title } = this.props
        return (
            <Head>
                <title>{title ? `${title} - ` : ``}Sourcier</title>
            </Head>
        )
    }
}
