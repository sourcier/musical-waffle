import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class PrivateRoute extends React.Component {
    static propTypes = {
        component: PropTypes.any,
        isAuthenticated: PropTypes.bool,
    }

    render() {
        const { isAuthenticated, component: Component, ...rest } = this.props
        return (
            <Route
                {...rest}
                render={(props) =>
                    isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location },
                            }}
                        />
                    )
                }
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.session.isAuthenticated,
})

export default connect(mapStateToProps)(PrivateRoute)
