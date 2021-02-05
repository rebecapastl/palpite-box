import React from 'react'
import Header from '../header'
import Footer from '../footer'

const Layout = ({children}) => {
    return (
        /*locate footer relative to screen height: flex flex-col min-h-screen + child tag: flex-grow + footer: pin-b */
        <div className='bg-gray-800 flex flex-col min-h-screen'>
            <Header />
            <div className='container mx-auto flex-grow'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout