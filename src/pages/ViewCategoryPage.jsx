import React from 'react'
import AppLayout from '../layout/AppLayout'
import Categories from '../tables/Categories'

const ViewCategoryPage = () => {
    const pagetitle = "Art Categories"
    return (
        <div>
            <AppLayout pagetitle={pagetitle}>
                <Categories/>
            </AppLayout>
        </div>
    )
}

export default ViewCategoryPage
