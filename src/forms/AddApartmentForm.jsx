import { div } from 'framer-motion/client'
import React from 'react'
import * as Icon from "react-feather"
import { Link } from 'react-router-dom'
const AddApartmentForm = () => {
    return (
        <div className='space-y-5'>
            <div className='w-full bg-white shadow rounded-xl space-y-4 p-5'>
                <div className="w-full flex flex-row items-center justify-between">
                <h1 className="text-2xl font-semibold">Add Apartment</h1>
                <Link to="/apartments/view" className="text-lime-500">View Apartments</Link>
                </div>

                <div className="w-full">
                    <form action="" className="w-full space-y-3">
                        <div className="w-full flex flex-col md:flex-row items-center space-y-2 md:space-x-6">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Apartment Name</label>
                                <input type="text" placeholder='enter apartmentname' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Location</label>
                                <input type="text" placeholder='enter location' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div>
                        <div className="w-full flex flex-row items-center space-x-6">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Bank Account Number</label>
                                <input type="text" placeholder='account number' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>


                        </div>
                        
                        <div className="w-full flex flex-row items-center space-x-6">
                            
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" for="drop" className="text-neutral-500 cursor-pointer">
                                    <div className="w-full border border-neutral-200 h-40 flex flex-col space-y-3 justify-center items-center rounded-xl">
                                        <Icon.DownloadCloud />
                                        <p className="text-neutral-500">Upload png,jpg,jpeg</p>
                                        <p className="text-neutral-500">Apartment Image</p>
                                    </div>
                                </label>
                                <input id='drop' type="file" placeholder='edit phone' className="w-full hidden bg-neutral-100 rounded-md p-2" />
                            </div>
                            

                        </div>
                        <div className="w-full justify-end items-end flex flex-row">
                            <button className="p-2 bg-black rounded-md text-white text-md w-40">
                                Add Apartment
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default AddApartmentForm
