import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { BlogList } from "./pages/BlogList"
import { NotFound } from "./pages/NotFound"
import { BlogPost } from "./pages/BlogPost"
import { Masthead } from "./components/Masthead"
import { Contact } from "./pages/Contact"
import Login from "./pages/Login"
import { Meta } from "./components/Meta"

class App extends Component {
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
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
