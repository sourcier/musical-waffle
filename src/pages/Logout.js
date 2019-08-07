import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import { logout } from '../store/reducers/session'

export class Logout extends React.Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
    }

    render() {
        this.props.logout()
        return <Redirect to="/" />
    }
}

const mapDispatchToProps = { logout }

export default compose(
    connect(
        null,
        mapDispatchToProps
    )
)(Logout)
