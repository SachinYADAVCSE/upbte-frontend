import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Year = () => {
    const [subjects, setSubjects] = useState([]);
    const { branch, semester } = useParams();
    console.log(branch, semester);


    // Fetching The Subjects here
    const fetchSubjects = async () => {
        try {
            const response = await fetch(`https://upbte-backend.vercel.app/user/api/${branch}/${semester}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            setSubjects(result.subjects || []);  // This will set ["Applied Mathematics 2", "Applied Physics 2"]
            console.log("Subjects:", result.subjects);
        } catch (err) {
            console.error("Fetch error:", err);
            setSubjects([]);

        }
    };
    
    // The problem was that we were fetching even when it was unedefined.
    useEffect(() => {
        if (branch && semester) {  // Prevent fetch if undefined
            fetchSubjects();
        }
    }, [branch, semester]);


    return (
        <div className='flex  items-center justify-center flex-wrap mt-5 w-full border gap-5 py-10 '>

            {
                subjects.map((value, index) => {
                    return (<div className='flex gap-3 flex-col  sm:w-[10vw] border w-[190vw]' key={index}>
                        <Link to={`/user/api/${branch}/${semester}/${encodeURIComponent(value.path)}`}>
                            <div className='bg-[#94B4C1] text-white border h-40 w-full text-center sm:w-[10vw] rounded-md flex items-center justify-center shadow-lg shadow-[#EAE0CF] hover:bg-[#547792] flex-wrap'>
                                <p className='text-xl sm:text-2xl font-bold'>
                                    {value.subject}
                                </p>
                            </div>
                        </Link>
                    </div>)
                })

            }
           
        </div>
    )
}

export default Year
