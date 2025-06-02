import React from 'react'
import AppLayout from '../layout/AppLayout'
import AddCategory from '../forms/AddCategory'

const AddCategoryPage = () => {
    const pagetitle = "Add New Art Category"
    return (
        <div>
            <AppLayout pagetitle={pagetitle}>
                <div className="w-full">
                    <AddCategory/>
                </div>
            </AppLayout>
        </div>
    )
}

export default AddCategoryPage
