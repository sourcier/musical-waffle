import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Root } from './pages/Root'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Root>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/blog" exact component={BlogList} />
                        <Route path="/blog/:slug" exact component={BlogPost} />
                        <Route component={NotFound} />
                    </Switch>
                </Root>
            </BrowserRouter>
        )
    }
}
