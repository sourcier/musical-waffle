import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import { Hero } from '../components/Hero'
import { signUp } from '../store/reducers/session'

export class SignUp extends React.Component {
    static propTypes = {
        signUp: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    }

    constructor(props) {
        super(props)
        this.state = { email: '', password: '', disabled: true }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value }, this.validateForm)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { email, password } = this.state
        this.props.signUp({ email, password })
    }

    validateForm() {
        const { email, password } = this.state
        if (!isEmpty(email) && !isEmpty(password))
            this.setState({ disabled: false })
    }

    render() {
        const { email, password, disabled } = this.state
        const { isAuthenticated } = this.props

        if (isAuthenticated) {
            return <Redirect to="/" />
        }

        return (
            <React.Fragment>
                <Hero title="Sign up" />
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter you email"
                                value={email}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passsword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={disabled}>
                            Signup
                        </button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = { signUp }

const mapStateToProps = ({ session: { isAuthenticated } }) => ({
    isAuthenticated,
})

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(SignUp)
