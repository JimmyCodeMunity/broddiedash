import React from 'react'
import AppLayout from '../layout/AppLayout'
import PaymentSettings from '../components/PaymentSettings'

const PaymentSettingsPage = () => {
    const pagetitle = "Configure Payment Settings"
    return (
        <div>
            <AppLayout pagetitle={pagetitle}>
                <div className="w-full">
                    <PaymentSettings/>
                </div>
            </AppLayout>
        </div>
    )
}

export default PaymentSettingsPage
