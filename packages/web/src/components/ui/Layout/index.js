import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
import ScrollToTop from '../../ScrollToTop'
import CloseNav from '../../CloseNav'

const Root = ({ children }) => (
  <React.Fragment>
    <ScrollToTop />
    <CloseNav />
    <Header />
    {children}
    <Footer />
  </React.Fragment>
)

export default Root
