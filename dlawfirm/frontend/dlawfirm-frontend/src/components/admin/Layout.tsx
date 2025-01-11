import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './common/Sidebar'
import { Header } from './common/Header'
import { Body } from './common/Body'
import { Footer } from './common/Footer'

export const Layout = ({children}) => {
    return (
        <>


            <Sidebar />
            <div className="main-panel">
                <Header />
                {children}
                <Footer />
            </div>
        </>






    )
}
