import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { div } from 'framer-motion/client'

const AppLayout = ({ children, pagetitle }) => {
    return (
        <div>
            <div className='w-full flex flex-row items-start bg-white max-w-7xl mx-auto'>

                {/* <div className='md:block hidden'> */}
                <Sidebar />
                {/* </div> */}
                <div className='w-full space-y-4 md:px-4'>
                    <Navbar pagetitle={pagetitle} />
                    <div className="md:px-16 px-6 h-full">
                        {children}
                    </div>

                </div>



            </div>
            <Footer />
        </div>
    )
}

export default AppLayout
