import React from 'react'
import {Link} from 'react-router-dom'

const Branch = () => {
    return (
        <div className='flex items-center justify-center mt-5 flex-wrap gap-5  py-10'>
            <div className='flex flex-col gap-3 w-full sm:w-auto'>
                <Link to="/user/api/semester-1">
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center text-2xl font-bold text-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        Semester 1 (Mix)
                    </div>
                </Link>
                <Link to="/user/api/mechanical">
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold'>
                            Mechnical
                        </p>
                    </div>
                </Link>
                <Link to="/user/api/civil">
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold'>
                            Civil
                        </p>
                    </div>
                </Link>
                <Link to="/user/api/electrical">
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold'>
                            Electrical
                        </p>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col gap-3 bg-[#f8f8f8] w-full sm:w-auto'>
                <Link to="/user/api/semester-2">
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold text-center'>
                            Semester 2 (Mix)
                        </p>
                    </div>
                </Link>
                <Link to="/user/api/cse">
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold'>
                            CSE
                        </p>
                    </div>
                </Link>
                <Link to="/user/api/D-pharm">
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold'>
                            D Pharm
                        </p>
                    </div>
                </Link>
                <Link to="/user/api/chemical">
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold'>
                            Chemical
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Branch
