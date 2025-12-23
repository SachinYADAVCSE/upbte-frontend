import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

const Pyq = () => {
    const [year, setYear] = useState([]);
    const { branch, semester, path } = useParams();

    const fetchYears = async () => {

        try {

            const response = await fetch(`https://upbte-backend.vercel.app/user/api/${branch}/${semester}/${path}`);
            if (!response.ok) {
                throw new Error(`Http error! status: ${response.status}`);
            }

            const result = await response.json();
            if(!Array.isArray(result)){
                console.log('Unexpected result: ', result);
                setYear([]);
                return;
            }
            setYear(result);
            if (result.length > 0 && result[0]?.path) {
                console.log('Subjects:', result[0].path);
            }
            
        } catch (err) {
            console.log(err);
            setYear([]);
        }
    }

    useEffect(()=>{
        fetchYears();
    }, [branch, semester, path])

    return (
            <div className='flex  items-center justify-center flex-wrap mt-5 w-full border gap-5 py-10 '>

                {
                    year.map((value, index) => {
                        return (<div className='flex gap-3 flex-col  sm:w-[10vw] border w-[190vw]' key={index}>
                            <Link to={`https://upbte-backend.vercel.app/user/api/${branch}/${semester}/${encodeURIComponent(value.path)}/${encodeURIComponent(value.year)}/download`}>
                                <div className='bg-[#94B4C1] text-white border h-40 w-full text-center sm:w-[10vw] rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792] flex-wrap'>
                                    <p className='text-xl sm:text-2xl font-bold'>
                                        {value.year}
                                    </p>
                                </div>
                            </Link>
                        </div>)
                    })

                }

            </div>
    )
}

export default Pyq