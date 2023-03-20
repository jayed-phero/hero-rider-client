import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 h-screen ">
                <div className="max-w-6xl xl:px-0 flex flex-col items-center justify-center px-5 py-12 mx-auto text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                        Try something really different right now.
                    </h2>

                    <p className="block max-w-4xl mt-4 text-gray-500 dark:text-gray-300">
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Esse iure tenetur commodi ipsam error voluptate magni. Adipisci repudiandae ullam commodi
                        iusto reprehenderit suscipit facere voluptatem, eaque maiores minima. Neque, officiis.
                    </p>

                    <div className="mt-6">
                        <Link to='/learnersignup' className="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">

                            <span className="mx-2">
                                Learner Sign Up
                            </span>
                        </Link>

                        <Link to='/ridersignup'
                            className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            <svg className="w-5 h-5 mx-2 fill-current" viewBox="-28 0 512 512.00075" xmlns="http://www.w3.org/2000/svg">
                                <path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0">
                                </path>
                            </svg>

                            <span className="mx-2">
                                Rider Sign Up
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;