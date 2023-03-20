import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 min-h-screen  flex items-center justify-center px-5">
                <div className="max-w-6xl flex flex-col items-center rounded-3xl px-5 py-12 mx-auto text-center bg-gray-100">
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
                            <i class="fa-solid fa-graduation-cap text-xl text-white mx-2"></i>
                            <span className="mx-2">
                                Learner Sign Up
                            </span>
                        </Link>

                        <Link to='/ridersignup'
                            className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            <i class="fa-solid fa-car mx-2 text-xl text-white"></i>

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