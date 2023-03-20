import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthProvider)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success("Successfully Loged Out")
                navigate('/')
            })
    }
    return (
        <div>
            <nav class="relative bg-white shadow dark:bg-gray-800">
                <div class="max-w-6xl xl:px-0 px-6 py-5 mx-auto">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex items-center justify-between">
                            <a href="#">
                                <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                            </a>

                            <div class="flex lg:hidden">
                                <button type="button" onClick={() => setOpen(!open)} class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    {
                                        open ?
                                            <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            :
                                            <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                            </svg>
                                    }



                                </button>
                            </div>
                        </div>


                        <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${open ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
                            <div class="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                <a href="#" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Join Slack</a>
                                <a href="#" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Browse Topics</a>
                                <a href="#" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Random Item</a>
                                <a href="#" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Experts</a>
                            </div>

                            <div class="flex items-center mt-4 lg:mt-0">
                                {
                                    user?.uid ?
                                        <Link
                                            onClick={handleLogout}
                                            className='px-5 py-2 bg-blue-500 rounded-full  hover:bg-blue-400 transition-all duration-500 ease-in-out'
                                        >Logout</Link>
                                        :
                                        <Link
                                            to='/registration'
                                            className='px-5 py-2 bg-blue-500 rounded-full  hover:bg-blue-400 transition-all duration-500 ease-in-out'
                                        >Sign In</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;