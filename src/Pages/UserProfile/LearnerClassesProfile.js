import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';

const LearnerClassesProfile = () => {
    const { user } = useContext(AuthProvider)

    const { data: paidCourses = [], isLoading } = useQuery({
        queryKey: ['paidstudent'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/paidstudent/${user?.email}`)
            .then(res => res.json())
    })
    console.log(paidCourses)
    return (
        <div className='max-w-6xl mx-auto px-5 xl:px-0 h-screen bg-gray-100 my-7 rounded-2xl'>
            <h3 className='text-2xl md:text-4xl text-center pt-7 mb-5 text-blue-500 font-bold'>Enrelled Courses For you</h3>
            {
                paidCourses.length ?
                    <div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-7 md:px-7'>
                            {
                                paidCourses.map(data =>
                                    <div class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                                        <div class="flex justify-center -mt-16 md:justify-end">
                                            <img class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={data.image} />
                                        </div>

                                        <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{data.title}</h2>

                                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">{data.desc} res deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                                        <div class="flex justify-end mt-4">
                                            <a href="#" class="text-lg font-medium text-blue-600 dark:text-blue-300" tabindex="0" role="link">Start Classes</a>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    :
                    <div className='flex items-center justify-center h-full w-full'>
                        <div className='bg-white px-7 py-9 rounded-2xl flex flex-col items-center justify-center'>
                            <h3 className='text-xl font-semibold text-red-500'>You don't have any Enrolled Course</h3>
                            <Link to='/courses'
                                className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 mt-5">
                                <i class="fa-solid fa-right-to-bracket mx-2 text-white"></i>

                                <span className="mx-2">
                                    See Courses
                                </span>
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default LearnerClassesProfile;