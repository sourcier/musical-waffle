import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Root } from './pages/Root'
import BlogList from './pages/BlogList'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Root>
                    <Switch>
                        <Route path="/blog" component={BlogList} />
                    </Switch>
                </Root>
            </BrowserRouter>
        )
    }
}
