import React from 'react'
import * as Icon from 'react-feather'
import PlanCard from './PlanCard'
import BasicPlanCard from './BasicPlanCard'
const NewsAndBilling = () => {
    return (
        <div className='space-y-6'>
            <PlanCard/>


            <BasicPlanCard/>




            <div className="">
                <div className="w-full bg-black rounded-2xl p-5 flex flex-col justify-between space-y-3">
                    <h1 className="text-xl text-white">Request for Support</h1>
                    {/* <div>
                        <h1 className="text-2xl font-semibold text-white">Kes.2000/Month</h1>
                        <h1 className="text-lg text-neutral-500">Kes.10000 Billed Annually</h1>
                    </div> */}
                    <div className='w-full space-y-3'>
                        <button className="bg-lime-500 h-10 w-full px-4 rounded-xl flex flex-row justify-between items-center space-x-3">
                            <p className="text-black text-md">Email</p>
                            <Icon.Mail  className='text-white'/>
                        </button>
                        <button className="bg-lime-500 h-10 w-full px-4 rounded-xl flex flex-row justify-between items-center space-x-3">
                            <p className="text-black text-md">Whatsapp</p>
                            <Icon.MessageCircle  className='text-white'/>
                        </button>
                        <button className="bg-lime-500 h-10 w-full px-4 rounded-xl flex flex-row justify-between items-center space-x-3">
                            <p className="text-black text-md">Call</p>
                            <Icon.PhoneCall  className='text-white'/>
                        </button>
                    </div>
                </div>
            </div>


            



        </div>
    )
}

export default NewsAndBilling
