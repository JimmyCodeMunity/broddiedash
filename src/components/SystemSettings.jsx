import React from 'react'
import * as Icon from 'react-feather'
import BasicPlanCard from './BasicPlanCard'
import PlanCard from './PlanCard'

const SystemSettings = () => {
    return (
        <div className='w-full space-y-5 py-8'>
            <div className="w-full bg-white shadow rounded-xl p-6">
                <p className="text-2xl md:text-start text-center md:py-0 py-4">Front Settings</p>
                <div className="w-full  justify-center items-center flex flex-row">
                    <div className=" border border-orange-500 rounded-full p-5 flex flex-row justify-center items-center overflow-hidden">
                        <img src="../rent.png" className='rounded-full border border-neutral-100 h-20 w-20' alt="" />
                        {/* <div className="absolute bg-black h-10 rounded-b-full p-5 w-full bottom-0 flex flex-row justify-center items-center"> */}
                            <form action="" className='w-full flex justify-center'>
                                <label htmlFor="" for="logo" className='cursor-pointer'>
                                    <Icon.Upload className='text-orange-500' />
                                    <input id='logo' type="file" placeholder='edit phone' className="w-full hidden bg-neutral-100 rounded-md p-2" />
                                </label>
                            </form>
                        {/* </div> */}
                    </div>
                </div>

                <div className="w-full py-5">
                    <form action="" className="w-full">
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Agent Name</label>
                                <input type="text" placeholder='agent Name' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Copyright</label>
                                <input type="text" placeholder='enter copyright' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div>
                    </form>
                </div>
            </div>


            <div className="w-full flex md:flex-row flex-col items-start gap-4">
                {/* maintenance settings */}
                <div className="w-full bg-white shadow rounded-xl p-6">
                    <p className="text-2xl">Maintenance Settings</p>
                    <div className="w-full flex flex-row justify-between items-center">
                        <p className="text-lg text-neutral-500">Enable Maintenance Mode</p>
                        <input type="checkbox" className='h-6 rounded-xl checked:text-orange-500 w-6' />
                    </div>
                </div>
                {/* <div className="w-full">
                    <BasicPlanCard />
                </div>
                <div>
                    <PlanCard />
                </div> */}

            </div>


            {/* Communication Settings */}
            <div className="w-full bg-white shadow rounded-xl p-6 space-y-3">
                <p className="text-2xl">Communication Settings</p>
                <div className="w-full flex space-x-2">
                    <Icon.Mail />
                    <p className="text-lg text-neutral-500">Email Settings</p>
                </div>
                <div className="w-full">
                    <form action="" className="w-full space-y-3">
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Hostname</label>
                                <input type="text" placeholder='enter hostname' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Mail server Username</label>
                                <input type="text" placeholder='mail username' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div>
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">PORT</label>
                                <input type="text" placeholder='enter port' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Password</label>
                                <input type="password" placeholder='********' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div>
                        <div className="w-full justify-end items-end flex flex-row">
                            <button className="p-2 bg-black rounded-md text-white text-md w-40">
                                Save
                            </button>
                        </div>
                    </form>
                </div>



                {/* Communication Settings */}

                <div className="w-full flex space-x-2">
                    <Icon.Mail />
                    <p className="text-lg text-neutral-500">SMS Settings</p>
                </div>
                <div className="w-full">
                    <form action="" className="w-full space-y-3">
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Africastalking API Key</label>
                                <input type="text" placeholder='********' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>


                        </div>

                        <div className="w-full justify-end items-end flex flex-row">
                            <button className="p-2 bg-black rounded-md text-white text-md w-40">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SystemSettings
