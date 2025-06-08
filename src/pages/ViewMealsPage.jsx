import React from 'react'
import AppLayout from '../layout/AppLayout'
import Meals from '../tables/Meals'

const ViewMealssPage = () => {
    const pagetitle = "Arts"
    return (
        <div>
            <AppLayout pagetitle={pagetitle}>
                <Meals/>
            </AppLayout>
        </div>
    )
}

export default ViewMealssPage
