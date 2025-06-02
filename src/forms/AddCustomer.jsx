import axios from 'axios'
import { div } from 'framer-motion/client'
import React, { useContext, useState } from 'react'
import * as Icon from "react-feather"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ApiContext } from '../context/ApiContext'
import { AuthContext } from '../context/AuthContext'
const AddCustomer = () => {
    const {loading,setLoading} = useContext(AuthContext)
    const { getUsers } = useContext(ApiContext)
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")

    const handleAddCustomer = async (e) => {
        e.preventDefault()
        setLoading(true)
        // return
        try {
            const response = await axios.post("https://broddie.menthealventures.com/api/v1/admin/createuser", {
                username, email, phone, password, address
            })
            const data = response.data;
            toast.success("Customer added successfully")
            await getUsers()
            setLoading(false)


        } catch (error) {
            console.log(error)
            toast.eror("Failed to add customer")
            setLoading(false)

        }
    }
    return (
        <div className='space-y-5'>
            <div className='w-full bg-white shadow rounded-xl space-y-4 p-5'>
                <div className="w-full flex flex-row items-center justify-between">
                    <h1 className="text-2xl font-semibold">Add Customer</h1>
                    <Link to="/customers/view" className="text-orange-500">View Customers</Link>
                </div>

                <div className="w-full">
                    <form method="post" onSubmit={handleAddCustomer} action="" className="w-full space-y-3">
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Username</label>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text" placeholder='edit username' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Phone</label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="text" placeholder='edit phone' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div>
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text" placeholder='edit username' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Address</label>
                                <input
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    type="text" placeholder='edit phone' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div>
                        <div className="w-full flex flex-row items-center space-x-6">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" placeholder='*******' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>


                        </div>


                        {/* <div className="w-full flex flex-row items-center space-x-6">

                            <div className='space-y-2 w-full'>
                                <label htmlFor="" for="drop" className="text-neutral-500 cursor-pointer">
                                    <div className="w-full border border-neutral-200 h-40 flex flex-col space-y-3 justify-center items-center rounded-xl">
                                        <Icon.DownloadCloud />
                                        <p className="text-neutral-500">Upload png,jpg,jpeg</p>
                                        <p className="text-neutral-500">ID Front</p>
                                    </div>
                                </label>
                                <input id='drop' type="file" placeholder='edit phone' className="w-full hidden bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" for="drop" className="text-neutral-500 cursor-pointer">
                                    <div className="w-full border border-neutral-200 h-40 flex flex-col space-y-3 justify-center items-center rounded-xl">
                                        <Icon.DownloadCloud />
                                        <p className="text-neutral-500">Upload png,jpg,jpeg</p>
                                        <p className="text-neutral-500">ID Back</p>
                                    </div>
                                </label>
                                <input id='drop' type="file" placeholder='edit phone' className="w-full hidden bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div> */}
                        <div className="w-full justify-end items-end flex flex-row">
                            <button className="p-2 bg-black rounded-md text-white text-md w-40">
                                Add Customer
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default AddCustomer
