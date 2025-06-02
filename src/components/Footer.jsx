import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='w-full py-5 relative max-w-7xl mx-auto'>
            <div className="w-full bg-white sm:px-16 px-6 absolute bottom-10">
                <p className="text-orange-500 text-center text-sm">Copyright@{currentYear} Qode Technologies</p>
            </div>

        </div>
    )
}

export default Footer
