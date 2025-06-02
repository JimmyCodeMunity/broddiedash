import React from 'react'
import AppLayout from '../layout/AppLayout'
import Orders from '../tables/Orders'
import PendingOrders from '../tables/PendingOrders'

const ViewPendingOrderssPage = () => {
    const pagetitle = "Orders"
    return (
        <div>
            <AppLayout pagetitle={pagetitle}>
                <PendingOrders/>
            </AppLayout>
        </div>
    )
}

export default ViewPendingOrderssPage
