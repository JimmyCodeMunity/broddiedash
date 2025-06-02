import React, { useContext } from 'react'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
import { ApiContext } from '../context/ApiContext'
import ReactSwitch from 'react-switch'

const Meals = () => {
    const { meals, getAllArt, updateFeatured,updatePopular } = useContext(ApiContext)
    const active = "true"
    const inactive = "false"
    return (
        <div className='w-full py-4'>
            <div className="w-full rounded-xl space-y-4 mb-5 shadow p-3">
                <div className="w-full flex flex-row justify-between items-center">
                    <h1 className="text-xl">My Art</h1>
                    <div className="p-2 rounded-xl flex flex-row justify-center items-center space-x-4">

                        <Icon.Printer size={20} className='text-black' />
                        <Icon.File size={20} className='text-black' />
                        <button onClick={() => getAllMeals()}>
                            <Icon.RefreshCcw size={20} className='text-black' />
                        </button>
                        <Link to="/meal/add" className="text-white flex flex-row items-center bg-black p-2 rounded-md">
                            <Icon.Plus />
                            Add Art
                        </Link>
                    </div>

                </div>


                <div class="flex flex-col">
                    <div class="-m-1.5 overflow-x-auto">
                        <div class="p-1.5 min-w-full inline-block align-middle">
                            <div class="overflow-hidden">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Price</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Image</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Category</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Make Featured</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Make Popular</th>
                                            <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200">
                                        {
                                            meals.map((meal) => {
                                                return (
                                                    <tr class="hover:bg-gray-100">
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{meal?.artname}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{meal?.price}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"><img src={`https://broddie.menthealventures.com/${meal?.image}`} alt="" className="h-10 w-10 rounded-full" /></td>

                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{meal?.category}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                            <ReactSwitch
                                                                onChange={meal.featured === "false" ? () => updateFeatured(meal._id, active) : () => updateFeatured(meal?._id,inactive)}
                                                                checked={meal?.featured === "false" ? false:true}
                                                            />
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                            <ReactSwitch
                                                                onChange={meal.popular === "false" ? () => updatePopular(meal._id, active) : () => updatePopular(meal?._id,inactive)}
                                                                checked={meal?.popular === "false" ? false:true}
                                                            />
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium space-x-2">
                                                            {/* {
                                                                meal?.featured === "false" ? (
                                                                    <button onClick={() => updateFeatured(meal?._id, active)} type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-orange-600  focus:outline-hidden ">Make Featured</button>
                                                                ) : (
                                                                    <button onClick={()=>updateFeatured(meal?._id,inactive)} type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-orange-600  focus:outline-hidden ">remove Featured</button>
                                                                )
                                                            } */}
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

export default Meals
