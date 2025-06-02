import React from 'react'
import * as Icon from 'react-feather'
const PlanCard = () => {
    return (
        <div>
            <div className="">
                <div className="w-full bg-black rounded-2xl space-y-3 p-5 flex flex-col justify-between">
                    <h1 className="text-xl text-white">Upgrade to Pro</h1>
                    <div>
                        <h1 className="text-2xl font-semibold text-white">Kes.2,000/Month</h1>
                        <h1 className="text-lg text-neutral-500">Kes.17,000 Billed Annually</h1>
                    </div>
                    <div className="w-full">
                        <ul>
                            <li className='flex flex-row items-center'>
                                <Icon.Check className='text-lime-500' />
                                <span className='text-white text-sm'>Unlimited Apartments</span>
                            </li>
                            <li className='flex flex-row items-center'>
                                <Icon.Check className='text-lime-500' />
                                <span className='text-white text-sm'>24/7 Support</span>
                            </li>
                            <li className='flex flex-row items-center'>
                                <Icon.Check className='text-lime-500' />
                                <span className='text-white text-sm'>Free Support</span>
                            </li>
                            <li className='flex flex-row items-center'>
                                <Icon.Check className='text-lime-500' />
                                <span className='text-white text-sm'>24/7 Support</span>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <button className="bg-lime-500 h-10 px-4 rounded-xl flex flex-row items-center space-x-3">
                            <p className="text-black text-md">Upgrade Now</p>
                            <Icon.ArrowUpRight />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PlanCard
