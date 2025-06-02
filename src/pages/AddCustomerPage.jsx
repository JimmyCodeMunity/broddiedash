import React from 'react'
import AppLayout from '../layout/AppLayout'
import AddCustomer from '../forms/AddCustomer'

const AddCustomerPage = () => {
    const pagetitle = "Add New Customer"
    return (
        <div>
            <AppLayout pagetitle={pagetitle}>
                <div className="w-full">
                    <AddCustomer/>
                </div>
            </AppLayout>
        </div>
    )
}

export default AddCustomerPage
