import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import { isEmpty } from "lodash"
import PropTypes from "prop-types"
import { Hero } from "../components/Hero"
import { login } from "../store/reducers/session"

export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: "", password: "", disabled: true }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value }, this.validateForm)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { email, password } = this.state
        this.props.login({ email, password })
    }

    validateForm() {
        const { email, password } = this.state
        if (!isEmpty(email) && !isEmpty(password))
            this.setState({ disabled: false })
    }

    render() {
        const { email, password, disabled } = this.state

        return (
            <React.Fragment>
                <Hero title="Login" />
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
                            Login
                        </button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = { login }

export default compose(
    connect(
        null,
        mapDispatchToProps
    )
)(Login)
