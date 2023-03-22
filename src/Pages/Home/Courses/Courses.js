import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ScrollToTop from '../../../Shared/ScrollToTop/ScrollToTop';
import CouseCardSekleton from '../../../Shared/Skeleton/CouseCardSekleton';
import CourseRow from './CourseRow';

const Courses = () => {
    const { data: courses = [], isLoading } = useQuery({
        queryKey: ['courses'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/courses`)
            .then(res => res.json())
    })
    return (
        <div>
            <ScrollToTop />
            <section class=" dark:bg-gray-900">
                <div class="max-w-6xl px-6 py-10 mx-auto bg-gray-100 my-7 rounded-3xl">
                    <div class="text-center">
                        <h1 class="text-2xl font-bold text-blue-600 capitalize lg:text-4xl dark:text-white">Super Courses For You</h1>

                        <p class="max-w-lg mx-auto mt-4 text-gray-500">
                            Try to make your carrer with shining . Fix your dream or goals by this you will find a proper way in-sha-Allah.
                        </p>
                    </div>

                    <div class="flex items-center gap-5 lg:gap-7 mt-8 flex-col lg:flex-row justify-center">
                        {
                            isLoading ?
                                [1, 2].map((skel, i) =>
                                    <CouseCardSekleton
                                        key={i}
                                    />
                                )
                                :
                                courses.map((course, i) =>
                                    <CourseRow
                                        key={i}
                                        course={course}
                                    />
                                )
                        }
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Courses;