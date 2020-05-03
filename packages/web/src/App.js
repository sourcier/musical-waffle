import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Global } from '@emotion/core'
import { hot } from 'react-hot-loader/root'

import Layout from './components/ui/Layout'
import Blog from './components/routes/Blog'
import BlogPage from './components/routes/BlogPage'
// import Home from './routes/Home'
import NotFound from './components/routes/NotFound'
import Contact from './components/routes/Contact'
import ThankYou from './components/routes/Contact/ThankYou'
import { treatments } from './libs/theme'

export default hot((props) => (
  <BrowserRouter>
    <HelmetProvider>
      <Global styles={treatments.body} />
      <Layout>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/contact" exact component={Contact} />
          <Route path="/contact/thank-you" exact component={ThankYou} />
          <Route path="/" exact component={Blog} />
          <Route path="/:slug" exact component={BlogPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </HelmetProvider>
  </BrowserRouter>
))
