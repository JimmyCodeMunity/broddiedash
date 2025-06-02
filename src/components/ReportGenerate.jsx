import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { categories } from '../constants'
import NewUsers from '../tables/NewUsers'
import Apartments from '../tables/Apartments'

const ReportGenerate = () => {
    const [selected, setSelected] = useState(null)

    return (
        <div className="w-full py-5">
            <div className='w-full grid grid-cols-3 gap-8'>
                {
                    categories.map((item) => {
                        const Iconcomponent = Icon[item?.icon]
                        return (
                            <div onClick={() => setSelected(item)} className={`w-full ${item?.bg} ${selected?.title === item?.title && "border my-5 translate-y-4 transition-transform duration-700 translate-x-4 border-blue-500"} cursor-pointer flex flex-row items-center justify-center h-40 rounded-xl`}>
                                <div className="space-y-2 justify-center items-center flex flex-col">
                                    <Iconcomponent className={`text-xl ${item?.textcolor} font-semibold`} size={30} />
                                    <h1 className={`text-xl ${item?.textcolor} font-semibold`}>{item?.title}</h1>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

            <div className="w-full py-5">
                <h1>Select Category:{selected?.title || ""}</h1>
                <div className="w-full">
                    {
                        selected?.title === "Users" ? (<NewUsers />) : null ||
                            selected?.title === "Apartments" ? <Apartments /> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ReportGenerate
