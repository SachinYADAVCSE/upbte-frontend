import React from 'react'
import {Link, useParams} from 'react-router-dom'

const Semester = () => {
    const {branch} = useParams();

    return (
        <div className='flex items-center justify-center mt-5 flex-wrap gap-5 py-10'>
            <div className='flex flex-col gap-3 w-full sm:w-auto'>
                <Link to={`/user/api/${branch}/1`}>
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center text-2xl font-bold text-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        Semester 1 
                    </div>
                </Link>
                <Link to={`/user/api/${branch}/2`}>
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold'>
                            Semester 2
                        </p>
                    </div>
                </Link>
                <Link to={`/user/api/${branch}/3`}>
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold'>
                        Semester 3
                        </p>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col gap-3 bg-[#f8f8f8] w-full sm:w-auto'>
                <Link to={`/user/api/${branch}/4`}>
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold text-center'>
                            Semester 4 
                        </p>
                    </div>
                </Link>
                <Link to={`/user/api/${branch}/5`}>
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold'>
                        Semester 5
                        </p>
                    </div>
                </Link>
                <Link to={`/user/api/${branch}/6`}>
                    <div className='bg-[#94B4C1] text-white border h-20 w-full sm:w-40 rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792]'>
                        <p className='text-xl sm:text-2xl font-bold'>
                        Semester 6
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Semester
