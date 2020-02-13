import React from 'react'
import Head from 'next/head'
import { Header } from './Header'
import { Footer } from './Footer'

export default ({ children }) => (
    <React.Fragment>
        <Head>
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,600,700,700i|Montserrat:300,400,500,600,700"
                rel="stylesheet"
            />
            <link
                href="/lib/font-awesome/css/font-awesome.min.css"
                rel="stylesheet"
            />
            <link href="/lib/animate/animate.min.css" rel="stylesheet" />
            <link href="/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
            <link
                href="/lib/owlcarousel/assets/owl.carousel.min.css"
                rel="stylesheet"
            />
            <link href="/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
            <link href="/css/style.css" rel="stylesheet" />
            <script src="/lib/jquery/jquery.min.js" />
            <script src="/lib/jquery/jquery-migrate.min.js" />
            <script src="/lib/bootstrap/js/bootstrap.bundle.min.js" />
            <script src="/lib/easing/easing.min.js" />
            <script src="/lib/wow/wow.min.js" />
            <script src="/lib/waypoints/waypoints.min.js" />
            <script src="/lib/counterup/counterup.min.js" />
            <script src="/lib/owlcarousel/owl.carousel.min.js" />
            <script src="/lib/isotope/isotope.pkgd.min.js" />
            <script src="/lib/lightbox/js/lightbox.min.js" />
        </Head>
        <Header />
        {children}
        <Footer />
    </React.Fragment>
)
