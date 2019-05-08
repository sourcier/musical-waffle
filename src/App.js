import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { BlogList } from "./pages/BlogList"
import { NotFound } from "./pages/NotFound"
import { BlogPost } from "./pages/BlogPost"
import { Masthead } from "./components/Masthead"
import { About } from "./pages/About"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Masthead />
                <Switch>
                    <Route exact path={"/"} component={BlogList} />
                    <Route exact path={"/about"} component={About} />
                    <Route exact path={"/blog"} component={BlogList} />
                    <Route exact path={"/blog/:slug"} component={BlogPost} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
