import React, { useContext, useState } from 'react'
import * as Icon from 'react-feather'
import Sidebar from './Sidebar'
import MobileSidebar from './MobileSidebar'
import { AuthContext } from '../context/AuthContext'

const Navbar = ({ pagetitle }) => {
    const [open, setOpen] = useState(false)
    const {userdata} = useContext(AuthContext)

    const handleMenu = () => {
        setOpen(!open)
    }
    return (
        <div className='w-full py-8 bg-white md:px-16 px-6'>
            <div className="w-full justify-between flex flex-row items-center">
                <div>
                    <h1 className='font-bold md:text-2xl text-lg'>{pagetitle}</h1>
                </div>
                <div className='md:flex hidden flex-row items-center space-x-4'>
                    <div>
                        <Icon.Bell size={20} className='text-neutral-500' />
                    </div>
                    <div className='flex flex-row items-center space-x-3'>
                        <img src="../broddie.jpeg" alt="" className="h-8 w-8 border border-orange-500 rounded-full" />
                        <div>
                            <h3 className="text-md text-neutral-500">{userdata?.username}</h3>
                        </div>
                    </div>

                </div>

                <div className="md:hidden block">
                    <Icon.Menu onClick={handleMenu} className='text-neutral-500' />
                </div>

                
                    {
                        open &&
                        <div id='menu' className="md:hidden w-full h-screen top-0 left-0 fixed">
                            <div className="w-80 bg-white h-full">
                                <div className="absolute top-4 rounded-full bg-orange-500 p-4 right-14">
                                    <Icon.ChevronLeft onClick={handleMenu} className='text-white' />
                                </div>
                                <div className="md:hidden w-full">
                                    <MobileSidebar />
                                </div>
                            </div>
                        </div>
                    }
                
            </div>
        </div>
    )
}

export default Navbar
