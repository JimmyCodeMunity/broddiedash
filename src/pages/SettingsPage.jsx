import React from 'react'
import AppLayout from '../layout/AppLayout'
import SystemSettings from '../components/SystemSettings'

const SettingsPage = () => {
    const pagetitle = "System Settings"
    return (
        <div>
            <AppLayout pagetitle={pagetitle}>
                <SystemSettings/>
            </AppLayout>
        </div>
    )
}

export default SettingsPage
