import React from 'react'
import Header from './header'
import { Footer } from './Footer'
import ScrollToTop from '../ScrollToTop'

const Root = ({ children }) => (
  <React.Fragment>
    <ScrollToTop />
    <Header />
    {children}
    <Footer />
  </React.Fragment>
)

export default Root
