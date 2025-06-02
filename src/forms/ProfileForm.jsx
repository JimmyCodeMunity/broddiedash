import { div } from 'framer-motion/client'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const ProfileForm = () => {
    const {userdata} = useContext(AuthContext)
    return (
        <div className='space-y-5'>
            <div className='w-full bg-white shadow rounded-xl space-y-4 p-5'>
                <h1 className="text-2xl font-semibold">Edit Profile</h1>

                <div className="w-full">
                    <form action="" className="w-full space-y-3">
                        <div className="w-full flex flex-row items-center space-x-6">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Username</label>
                                <input
                                value={userdata?.username}
                                type="text" placeholder='edit username' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            {/* <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Phone</label>
                                <input type="text" placeholder='edit phone' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div> */}

                        </div>
                        <div className="w-full flex flex-row items-center space-x-6">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Email</label>
                                <input
                                value={userdata?.email}
                                type="text" placeholder='edit email' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>


                        </div>
                        <div className="w-full justify-end items-end flex flex-row">
                            <button className="p-2 bg-black rounded-md text-white text-md w-40">
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            <div className='w-full bg-white shadow rounded-xl space-y-4 p-5'>
                <h1 className="text-2xl font-semibold">Edit Password</h1>

                <div className="w-full">
                    <form action="" className="w-full space-y-3">
                        <div className="w-full flex flex-row items-center space-x-6">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Current Password</label>
                                <input type="password" placeholder='enter current password' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>


                        </div>
                        <div className="w-full flex flex-row items-center space-x-6">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">New Password</label>
                                <input type="password" placeholder='edit new password' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>


                        </div>
                        <div className="w-full flex flex-row items-center space-x-6">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Confirm Password</label>
                                <input type="password" placeholder='confirm password' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>


                        </div>
                        <div className="w-full justify-end items-end flex flex-row">
                            <button className="p-2 w-40 bg-black rounded-md text-white text-md">
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ProfileForm
