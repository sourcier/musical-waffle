import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
import ScrollToTop from '../../ScrollToTop'
import CloseNav from '../../CloseNav'

const Root = ({ children }) => (
  <>
    <ScrollToTop />
    <CloseNav />
    <Header />
    {children}
    <Footer />
  </>
)

export default Root
