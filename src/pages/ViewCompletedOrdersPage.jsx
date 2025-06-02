import React from 'react'
import AppLayout from '../layout/AppLayout'
import Orders from '../tables/Orders'

const ViewCompletedOrderssPage = () => {
    const pagetitle = "Orders"
    return (
        <div>
            <AppLayout pagetitle={pagetitle}>
                <Orders/>
            </AppLayout>
        </div>
    )
}

export default ViewCompletedOrderssPage
