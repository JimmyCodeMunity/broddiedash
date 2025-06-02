import React from 'react'
import AppLayout from '../layout/AppLayout'
import ProfileCard from '../components/ProfileCard'
import ProfileForm from '../forms/ProfileForm'

const ProfilePage = () => {
    const pagetitle="Profile"
    return (
        <div>
            <AppLayout pagetitle={pagetitle}>
                <div className="w-full flex md:flex-row flex-col md:py-8 py-4 items-start gap-4">
                    <div className='md:w-[50%] w-full'>
                        <ProfileCard/>
                    </div>
                    <div className='w-full'>
                        <ProfileForm/>
                    </div>
                </div>
            </AppLayout>
        </div>
    )
}

export default ProfilePage
