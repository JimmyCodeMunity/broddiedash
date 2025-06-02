import React, { useState } from 'react'
import * as Icon from 'react-feather'

const PaymentSettings = () => {
    const [selected, setSelected] = useState(false)

    const handleSelect = (option) => {
        setSelected(option)
    }

    const paymentoptions = [
        {
            id: 1,
            title: "Paypal",
            description: "Paypal Id"
        },
        {
            id: 2,
            title: "Pesapal",
            description: "Mpesa,Airtel,Card"
        },
        {
            id: 3,
            title: "Stripe",
            description: "Card"
        },
        {
            id: 4,
            title: "Sasapay",
            description: "Mpesa,Airtel"
        },
    ]
    return (
        <div className='w-full space-y-5'>
            <div className="w-full bg-white shadow rounded-xl p-5 space-y-3">
                <h1 className="text-neutral-500 text-lg font-semibold">Choose Payment methods</h1>
                <div className="w-full md:grid grid-cols-4 flex flex-col gap-4">
                    {
                        paymentoptions.map((option) => {
                            return (
                                <div className={`w-full space-y-2 flex flex-col ${selected?.title === option?.title && "bg-black rounded-xl"} p-3`}>
                                    <div onClick={() => handleSelect(option)} className="cursor-pointer w-full flex flex-row items-start space-x-3">
                                        <div>
                                            {
                                                selected?.title === option?.title ? (
                                                    <div onClick={() => handleSelect(option)} className="cursor-pointer h-6 w-6 rounded-xl flex flex-row justify-center items-center">
                                                        <div className="">
                                                            <Icon.CheckCircle className='text-white' />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div onClick={() => handleSelect(option)} className="cursor-pointer h-6 w-6 rounded-xl border border-neutral-600"></div>
                                                )
                                            }
                                        </div>
                                        <div>
                                            <p className={`${selected?.title === option?.title && "text-lime-500"}`}>{option?.title}</p>
                                            <p className={`text-sm text-neutral-500 ${selected?.title === option?.title && "text-white"}`}>{option?.description}</p>
                                            <p className="text-xs text-neutral-500">Not Set</p>
                                        </div>


                                    </div>
                                    <div className={`w-full border border-2 ${selected?.title === option?.title ? "border-lime-500":"border-neutral-500"}`}></div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
            {
                selected?.title === "Pesapal" ? <div className="w-full bg-white shadow rounded-xl p-5">
                    <h1 className="text-neutral-500 text-lg font-semibold">Pesapal</h1>
                    <form action="" className="w-full space-y-3 py-5">
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Pesapal API Key</label>
                                <input type="password" placeholder='************' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Security Key</label>
                                <input type="password" placeholder='************' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div>

                        <div className="w-full justify-end items-end flex flex-row">
                            <button className="p-2 flex items-center bg-red-400 rounded-md text-white text-md px-4 space-x-2">
                                <Icon.Save />
                                Save Credentials
                            </button>
                        </div>


                    </form>
                </div> : null
                    ||
                    selected?.title === "Stripe" ? <div className="w-full bg-white shadow rounded-xl p-5">
                    <h1 className="text-neutral-500 text-lg font-semibold">Stripe</h1>
                    <form action="" className="w-full space-y-3 py-5">
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Stripe API Key</label>
                                <input type="password" placeholder='************' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Security Key</label>
                                <input type="password" placeholder='************' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div>

                        <div className="w-full justify-end items-end flex flex-row">
                            <button className="p-2 flex items-center bg-indigo-500 rounded-md text-white text-md px-4 space-x-2">
                                <Icon.Save />
                                Save Credentials
                            </button>
                        </div>


                    </form>
                </div> : null

                    ||
                    selected?.title === "Paypal" ? <div className="w-full bg-white shadow rounded-xl p-5">
                    <h1 className="text-neutral-500 text-lg font-semibold">Paypal</h1>
                    <form action="" className="w-full space-y-3 py-5">
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Paypal API Key</label>
                                <input type="password" placeholder='************' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Security Key</label>
                                <input type="password" placeholder='************' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div>

                        <div className="w-full justify-end items-end flex flex-row">
                            <button className="p-2 flex items-center bg-blue-800 rounded-md text-white text-md px-4 space-x-2">
                                <Icon.Save />
                                Save Credentials
                            </button>
                        </div>


                    </form>
                </div> : null ||
                    selected?.title === "Sasapay" ? <div className="w-full bg-white shadow rounded-xl p-5">
                    <h1 className="text-neutral-500 text-lg font-semibold">Sasapay</h1>
                    <form action="" className="w-full space-y-3 py-5">
                        <div className="w-full flex md:flex-row flex-col items-center md:space-x-6 space-y-2">
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Sasapay API Key</label>
                                <input type="password" placeholder='************' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="" className="text-neutral-500">Security Key</label>
                                <input type="password" placeholder='************' className="w-full bg-neutral-100 rounded-md p-2" />
                            </div>

                        </div>

                        <div className="w-full justify-end items-end flex flex-row">
                            <button className="p-2 flex items-center bg-blue-500 rounded-md text-white text-md px-4 space-x-2">
                                <Icon.Save />
                                Save Credentials
                            </button>
                        </div>


                    </form>
                </div> : null
            }


        </div>
    )
}

export default PaymentSettings
