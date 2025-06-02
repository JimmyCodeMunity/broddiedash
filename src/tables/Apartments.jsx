import React from 'react'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

const Apartments = () => {
    return (
        <div className='w-full py-4'>
            <div className="w-full rounded-2xl space-y-4 shadow p-3">
                <div className="w-full flex flex-row justify-between items-center">
                    <h1 className="text-xl">My Apartments</h1>
                    <div className="p-2 rounded-xl flex flex-row justify-center items-center space-x-4">

                        <Icon.Printer size={20} className='text-black' />
                        <Icon.File size={20} className='text-black' />
                        <Link to="/apartments/add" className="text-lime-500 flex flex-row items-center bg-black p-2 rounded-md">
                            <Icon.Plus />
                            Add Apartment
                        </Link>
                    </div>

                </div>


                <table className='py-2 w-full px-2 overflow-x-scroll'>
                    <tr className='border border-t-0 border-b-1 border-r-0 border-l-0 p-3 rounded-t-2xl'>
                        <td className='text-md font-semibold text-neutral-600'>Apartmentname</td>
                        <td className='text-md font-semibold text-neutral-600'>Location</td>
                        <td className='text-md font-semibold text-neutral-600'>Units</td>
                        <td className='text-md font-semibold text-neutral-600'>Action</td>
                    </tr>

                    <tr className=''>
                        <td className='text-md text-neutral-600'>Gracious Court</td>
                        <td className='text-md text-neutral-600'>Ruiru</td>
                        <td className='text-md text-neutral-600'>50</td>
                        <td className='text-md space-x-2 py-2 text-neutral-600 flex flex-row items-center'>
                            <Icon.Edit className='text-lime-500' size={20} />
                            <Icon.Trash2 className='text-red-400' size={20} />
                        </td>

                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Apartments
