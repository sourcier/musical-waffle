import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Layout from './components/Layout'
import Blog from './routes/Blog'
import BlogPage from './routes/BlogPage'
import Home from './routes/Home'
import NotFound from './routes/NotFound'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <HelmetProvider>
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/blog" exact component={Blog} />
                            <Route
                                path="/blog/:slug"
                                exact
                                component={BlogPage}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </Layout>
                </HelmetProvider>
            </BrowserRouter>
        )
    }
}
