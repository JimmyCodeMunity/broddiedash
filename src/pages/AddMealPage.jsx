import React from 'react'
import AppLayout from '../layout/AppLayout'
import AddMeal from '../forms/AddMeal'

const AddMealPage = () => {
    const pagetitle = "Add New Art"
    return (
        <div>
            <AppLayout pagetitle={pagetitle}>
                <div className="w-full">
                    <AddMeal/>
                </div>
            </AppLayout>
        </div>
    )
}

export default AddMealPage
