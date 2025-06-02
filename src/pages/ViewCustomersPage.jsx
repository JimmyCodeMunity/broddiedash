import React from 'react'
import AppLayout from '../layout/AppLayout'
import Tenants from '../tables/Customers'
import Customers from '../tables/Customers'

const ViewCustomersPage = () => {
    const pagetitle = "Customers"
    return (
        <div>
            <AppLayout pagetitle={pagetitle}>
                <Customers/>
            </AppLayout>
        </div>
    )
}

export default ViewCustomersPage
