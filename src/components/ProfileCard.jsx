import React, { useContext } from 'react'
import * as Icon from 'react-feather'
import PlanCard from './PlanCard'
import BasicPlanCard from './BasicPlanCard'
import { AuthContext } from '../context/AuthContext'
import { LogOut, Power } from 'lucide-react'
const ProfileCard = () => {
    const { userdata, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }
    return (
        <div className="space-y-4">
            <div className='w-full bg-white shadow-md rounded-xl p-4 flex flex-col justify-center items-center space-y-5'>
                <img src="../broddie.jpeg" alt="" className="h-32 w-32 rounded-full object-cover border border-orange-500 border-2" />
                <div className="w-full justify-center items-center flex flex-col space-y-2">
                    <h1 className="font-bold text-xl text-black tracking-wide">{userdata?.username}</h1>
                    <p className="text-neutral-500">{userdata?.email}</p>

                    <div className="w-full py-5 flex flex-row justify-center items-center">
                        <button onClick={handleLogout} className="bg-orange-500 flex items-center space-x-2 rounded-xl px-4 text-white py-2">
                            <Power />
                            Logout</button>
                    </div>
                </div>

                <div className="w-full space-y-3">
                    {/* <div className="w-full flex flex-row space-x-4 items-center">
                    <div className="rounded-full p-3 bg-orange-200 flex flex-row justify-center items-center">
                        <Icon.Phone size={20} className='text-orange-500' />
                    </div>
                    <p className="text-neutral-500 text-sm">{userdata?.phone}</p>
                </div> */}
                    {/* <div className="w-full flex flex-row space-x-4 items-center">
                    <div className="rounded-full p-3 bg-orange-200 flex flex-row justify-center items-center">
                        <Icon.Briefcase size={20} className='text-orange-500' />
                    </div>
                    <p className="text-neutral-500 text-sm">Free</p>
                </div> */}
                </div>
            </div>

            <div className='space-y-3'>
                {/* <PlanCard/>
            <BasicPlanCard/> */}
            </div>
        </div>
    )
}

export default ProfileCard
