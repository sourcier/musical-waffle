import React from 'react'
import withReduxStore from '../lib/redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/Layout'

import './BlogList.css'
import './BlogPost.css'
import './Hero.css'

export default withReduxStore(({ Component, pageProps, reduxStore }) => (
    <Provider store={reduxStore}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider>
))
