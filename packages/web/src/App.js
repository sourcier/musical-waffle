import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Global } from '@emotion/core'

import Layout from './components/Layout'
import Blog from './routes/Blog'
import BlogPage from './routes/BlogPage'
// import Home from './routes/Home'
import NotFound from './routes/NotFound'
import Admin from './routes/Admin'
import { treatments } from './libs/theme'

export default (props) => (
  <BrowserRouter>
    <HelmetProvider>
      <Global styles={treatments.body} />
      <Layout>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={Blog} />
          <Route path="/:slug" exact component={BlogPage} />
          <Route path="/admin" exact component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </HelmetProvider>
  </BrowserRouter>
)
