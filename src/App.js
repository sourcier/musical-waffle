import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Root } from './pages/Root'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Root>
                    <Switch>
                        <Route path="/blog" exact component={BlogList} />
                        <Route path="/blog/:slug" component={BlogPost} />
                    </Switch>
                </Root>
            </BrowserRouter>
        )
    }
}
