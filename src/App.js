import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { compose } from "redux"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { restoreSession } from "./store/reducers/session"
import { BlogList } from "./pages/BlogList"
import { NotFound } from "./pages/NotFound"
import { BlogPost } from "./pages/BlogPost"
import { Masthead } from "./components/Masthead"
import { Contact } from "./pages/Contact"
import Login from "./pages/Login"
import { Meta } from "./components/Meta"
import SignUp from "./pages/SignUp"
import Logout from "./pages/Logout"

export class App extends Component {
    static propTypes = {
        restoreSession: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.restoreSession()
    }

    render() {
        return (
            <BrowserRouter>
                <Meta />
                <Masthead />
                <Switch>
                    <Route exact path={"/"} component={BlogList} />
                    <Route exact path={"/contact"} component={Contact} />
                    <Route exact path={"/blog"} component={BlogList} />
                    <Route exact path={"/blog/:slug"} component={BlogPost} />
                    <Route exact path={"/login"} component={Login} />
                    <Route exact path={"/logout"} component={Logout} />
                    <Route exact path={"/signup"} component={SignUp} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = { restoreSession }

export default compose(
    connect(
        null,
        mapDispatchToProps
    )
)(App)
