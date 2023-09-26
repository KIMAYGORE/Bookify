import React from 'react'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
   return (
      <>
         <Toaster />
         <Header />
         <Routers />
         <Footer />
      </>
   )
}

export default Layout