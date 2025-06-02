import React, { useContext } from 'react'
import AppLayout from '../layout/AppLayout'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
import NewsAndBilling from '../components/NewsAndBilling'
import NewUsers from '../tables/NewUsers'
import Customers from '../tables/Customers'
import PriceChart from '../charts/PriceChart'
import { AuthContext } from '../context/AuthContext'
import { ApiContext } from '../context/ApiContext'

const HomePage = () => {
    const pagetitle = "Dashboard"
    const {users,completedorders,pendingorders,allorders,totalsales,categories,meals} = useContext(ApiContext)
    return (
        <div className='bg-white'>
            <AppLayout pagetitle={pagetitle}>
                <div className="w-full flex md:flex-row flex-col items-start gap-4">
                    <div className="md:w-full w-full">
                        <div className="w-full grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-4 md:py-8">
                            <div className="w-full h-40 shadow rounded-xl bg-black p-5 flex flex-col justify-between">
                                <div className="flex flex-row items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex flex-row justify-center items-center">
                                        <Icon.DollarSign size={20} color="black" />
                                    </div>
                                    <h1 className='text-sm text-neutral-500 font-semibold'>Total Revenue</h1>
                                </div>
                                <div className="w-full flex flex-row items-center justify-between">
                                    <h1 className="text-2xl text-white font-bold">Kes.{totalsales}</h1>
                                    <Link>
                                        <Icon.ArrowUpRight size={20} className="text-white" />
                                    </Link>
                                </div>
                            </div>
                            <Link to="/completedorders/view" className="w-full h-40 shadow rounded-xl bg-neutral-100 p-5 flex flex-col justify-between">
                                <div className="flex flex-row items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-black flex flex-row justify-center items-center">
                                        <Icon.Home size={14} color="white" />
                                    </div>
                                    <h1 className='text-sm text-black font-semibold'>Completed Orders</h1>
                                </div>
                                <div className="w-full flex flex-row items-center justify-between">
                                    <h1 className="text-2xl text-black font-bold">{completedorders?.length}</h1>
                                    <Link>
                                        <Icon.ArrowUpRight size={20} color="black" />
                                    </Link>
                                </div>
                            </Link>
                            <Link to="/pendingorders/view" className="w-full h-40 shadow rounded-xl bg-black p-5 flex flex-col justify-between">
                                <div className="flex flex-row items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex flex-row justify-center items-center">
                                        <Icon.User size={20} color="black" />
                                    </div>
                                    <h1 className='text-sm text-white font-semibold'>Pending Orders</h1>
                                </div>
                                <div className="w-full flex flex-row items-center justify-between">
                                    <h1 className="text-2xl text-white font-bold">{pendingorders?.length}</h1>
                                    <Link>
                                        <Icon.ArrowUpRight size={20} color="black" />
                                    </Link>
                                </div>
                            </Link>
                            <Link to="/customers/view" className="w-full h-40 shadow rounded-xl bg-white p-5 flex flex-col justify-between">
                                <div className="flex flex-row items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-black flex flex-row justify-center items-center">
                                        <Icon.User size={20} color="white" />
                                    </div>
                                    <h1 className='text-sm text-black font-semibold'>Total Customers</h1>
                                </div>
                                <div className="w-full flex flex-row items-center justify-between">
                                    <h1 className="text-2xl text-black font-bold">{users?.length}</h1>
                                    <Link>
                                        <Icon.ArrowUpRight size={20} color="black" />
                                    </Link>
                                </div>
                            </Link>



                        </div>


                        {/* graphing */}
                        <div className="w-full md:py-0 md:space-y-0 space-y-4 py-4 flex md:flex-row flex-col items-center justify-between">
                            <div className="md:w-[60%] w-full bg-black shadow rounded-xl p-4">
                                <div className="w-full flex flex-row items-center justify-between">
                                    <p className="text-xl text-white">Statistics</p>
                                    <Link className='p-1 px-3 rounded-full bg-black'>
                                        <p className="text-sm text-white">Export</p></Link>
                                </div>
                                <div className="w-full">
                                    <PriceChart/>
                                </div>
                            </div>
                            <div className="md:w-[35%] w-full h-60 rounded-xl">
                                <h1 className="font-semibold text-xl text-neutral-500">Notices</h1>
                                <div className="w-full py-4 space-y-4">
                                    <Link to="/category/view" className="group bg-neutral-200 group hover:bg-black rounded-2xl items-center justify-between py-3 px-4 flex flex-row space-x-3">
                                        <span className='group-hover:text-white'>Total Categories({categories?.length})</span>
                                        <Icon.ChevronRight className='group-hover:text-orange-400' size={20} />
                                    </Link>
                                    <Link to="/meals/view" className="bg-black group hover:bg-neutral-500 rounded-2xl items-center justify-between py-3 px-4 flex flex-row space-x-3">
                                        <span className='text-orange-400 group-hover:text-black tracking-wide'>Total Art({meals?.length})</span>
                                        <Icon.ChevronRight size={20} className='text-orange-400 group-hover:text-black' />
                                    </Link>
                                    <Link className="bg-white shadow group hover:bg-neutral-500 rounded-2xl items-center justify-between py-3 px-4 flex flex-row space-x-3">
                                        <span className='text-orange-400 group-hover:text-black tracking-wide'>Featured</span>
                                        <Icon.ChevronRight size={20} className='text-orange-400 group-hover:text-black' />
                                    </Link>
                                </div>
                            </div>
                        </div>


                        {/* table */}
                        <div className="w-full">
                            <Customers />
                        </div>
                    </div>
                    {/* <div className="md:w-[30%] w-full py-8">
                        <NewsAndBilling />
                    </div> */}
                </div>
            </AppLayout>
        </div>
    )
}

export default HomePage
