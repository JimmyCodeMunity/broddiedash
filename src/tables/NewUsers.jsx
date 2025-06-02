import React from 'react'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

const NewUsers = () => {
    return (
        <div className='w-full py-4'>
            <div className="w-full rounded-2xl space-y-4 shadow-sm ring ring-neutral-100 p-3">
                <div className="w-full flex flex-row justify-between items-center">
                    <h1 className="text-xl">Recent Users</h1>
                    <Link className="p-2 rounded-full bg-lime-500 flex flex-row justify-center items-center space-x-4">
                        <span className="text-white text-sm">View All</span>
                        <Icon.ArrowRight size={20} className='text-white' />
                    </Link>
                </div>


                <table className='py-2 w-full px-2 overflow-x-scroll'>
                    <tr className='border border-t-0 border-b-1 border-r-0 border-l-0 p-3 rounded-t-2xl'>
                        <td className='text-md font-semibold text-neutral-600'>Username</td>
                        <td className='text-md font-semibold text-neutral-600'>Email</td>
                        <td className='text-md font-semibold text-neutral-600'>House</td>
                        <td className='text-md font-semibold text-neutral-600'>Member Since</td>
                    </tr>

                    <tr className=''>
                        <td className='text-md text-neutral-600'>Jimmy</td>
                        <td className='text-md text-neutral-600'>dev@gmail.com</td>
                        <td className='text-md text-neutral-600'>Hse.123</td>
                        <td className='text-md text-neutral-600'>23 September 2025</td>

                    </tr>
                </table>
            </div>

        </div>
    )
}

export default NewUsers
