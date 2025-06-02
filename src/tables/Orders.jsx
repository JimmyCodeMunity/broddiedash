import React, { useContext } from 'react'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
import { ApiContext } from '../context/ApiContext'

const Orders = () => {
    const { completedorders,updateOrder } = useContext(ApiContext)
    const action = "Pending"
    return (
        <div className='w-full py-4'>
            <div className="w-full rounded-xl space-y-4 mb-5 shadow p-3">
                <div className="w-full flex flex-row justify-between items-center">
                    <h1 className="text-xl">My Completed Orders</h1>
                    <div className="p-2 rounded-xl flex flex-row justify-center items-center space-x-4">

                        <Icon.Printer size={20} className='text-black' />
                        <Icon.File size={20} className='text-black' />
                        {/* <Link to="/meal/add" className="text-white flex flex-row items-center bg-black p-2 rounded-md">
                            <Icon.Plus />
                            Add Orders
                        </Link> */}
                    </div>

                </div>


                <div class="flex flex-col">
                    <div class="-m-1.5 overflow-x-auto">
                        <div class="p-1.5 min-w-full inline-block align-middle">
                            <div class="overflow-hidden">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Image</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Meal</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Price</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Customer Email</th>
                                            <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200">
                                        {
                                            completedorders?.map((corder) => {
                                                return (
                                                    <tr class="hover:bg-gray-100">
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"><img src={`https://smokey.haramad.co.ke/${corder?.mealid?.image}`} alt="" className="h-10 w-10 rounded-full" /></td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{corder?.mealid?.mealname}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Kshs.{corder?.mealid?.price}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{corder?.userid?.email}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium space-x-2">
                                                            <button onClick={()=>updateOrder(corder?._id,action)} type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-orange-600 hover:text-orange-500 ">Mark Pending</button>
                                                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Orders
