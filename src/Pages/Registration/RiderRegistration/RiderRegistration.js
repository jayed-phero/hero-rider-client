import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthProvider } from '../../../Context/AuthContext';

const RiderRegistration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, createUser, updateUserProfile } = useContext(AuthProvider)
    return (
        <div>
            <section class="max-w-4xl p-6 mx-auto bg-green-50 rounded-md shadow-md dark:bg-gray-800 my-11">
                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center pb-7 ">Rider Sign Up</h2>

                <form className='flex items-start flex-col lg:flex-row gap-7'>
                    <div className='max-w-md'>
                        <div>
                            <div>
                                <div className=''>
                                    <label for="username" class="block text-sm text-gray-500 dark:text-gray-300">Username</label>

                                    <input type="text" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border-2 border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </div>
                                <div className='mt-4'>
                                    <label class="block text-sm text-gray-500 dark:text-gray-300" for="password">Email</label>
                                    <input type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div className='flex items-center gap-5 mt-4 flex-col md:flex-row w-full'>
                                    <div className='md:w-1/3 w-full'>
                                        <label class="block text-sm text-gray-500 dark:text-gray-300" for="emailAddress">Age</label>
                                        <input id="emailAddress" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                    <div className='mt-4 md:mt-0 md:flex-1 w-full'>
                                        <label class="block text-sm text-gray-500 dark:text-gray-300" for="emailAddress">Phone</label>
                                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <label class="block text-sm text-gray-500 dark:text-gray-300">Address</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div className='mt-4'>
                                    <label for="image" class="block text-sm text-gray-500 dark:text-gray-300">Personal Photo</label>

                                    <input type="file" class="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                                </div>
                                <div className='mt-4'>
                                    <label class="block text-sm text-gray-500 dark:text-gray-300">Area</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <h3 className='pt-5 text-xl font-semibold text-gray-700'>Car Information</h3>

                                <div className='flex items-center gap-5 mt-4 flex-col md:flex-row w-full'>
                                    <div className='w-full'>
                                        <label class="block text-sm text-gray-500 dark:text-gray-300" >Car Name</label>
                                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                    <div className='mt- md:mt-0 w-full'>
                                        <label class="block text-sm text-gray-500 dark:text-gray-300" >Model Number</label>
                                        <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                </div>

                                <div className='mt-4 '>
                                    <label class="block text-sm text-gray-500 dark:text-gray-300" for="emailAddress">Name Palate</label>
                                    <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div className='flex items-center gap-5 mt-4 flex-col md:flex-row w-full'>
                                    <div className='w-full'>
                                        <label class="block text-sm text-gray-500 dark:text-gray-300" for="emailAddress">Password</label>
                                        <input type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                    <div className='mt-4 md:mt-0 w-full'>
                                        <label class="block text-sm text-gray-500 dark:text-gray-300" >Confirm Password</label>
                                        <input type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div>
                            <label for="image" class="block text-sm text-gray-500 dark:text-gray-300">Driving Licence</label>

                            <input type="file" class="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                        </div>
                        <img
                            className='w-full h-56 rounded-lg my-5'
                            src='https://png.pngitem.com/pimgs/s/349-3498892_texas-driver-license-psd-template-texas-drivers-license.png'
                        />
                        <div>
                            <label for="image" class="block text-sm text-gray-500 dark:text-gray-300">NID Card</label>

                            <input type="file" class="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                        </div>
                        <img
                            className='w-full h-56 rounded-lg my-5'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQwRZKjYEEZtFUDQ_HOJPeerijRXuUBRs2w&usqp=CAU'
                        />

                        <button
                            className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            <i class="fa-solid fa-right-to-bracket mx-2 text-white"></i>

                            <span className="mx-2">
                                Sign Up
                            </span>
                        </button>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default RiderRegistration;