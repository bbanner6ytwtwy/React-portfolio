import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../part/Home'
import Contact from "../components/Contact"
import PageLoader from '../components/Loader'

function Index() {
    return (
       <>
       <PageLoader />
        <Header />
        <Home />
        <Contact />
        <Footer />
       </>
    )
}

export default Index
