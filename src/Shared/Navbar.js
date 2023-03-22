import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {
    const { user, logout } = useContext(AuthProvider)
    const [isAdmin] = useAdmin(user?.email)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const [nav, setNav] = useState(false)

    useEffect(() => {
        function activateNav() {
            let scrollPosition = window.pageYOffset
            if (scrollPosition > 200) {
                setNav(true)
            }
            else if (scrollPosition < 10) {
                setNav(false)
            }
        }
        window.addEventListener("scroll", activateNav)
    }, [])

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success("Successfully Loged Out")
                navigate('/')
            })
    }
    console.log(user)
    return (
        <div className={`w-full ${nav && 'fixed w-full top-0 transition-all deration-500'}`}>
            <nav className="relative bg-white shadow dark:bg-gray-800">
                <div className="max-w-6xl xl:px-0 px-6 py-5 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            <a href="#">
                                <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                            </a>

                            <div className="flex lg:hidden">
                                <button type="button" onClick={() => setOpen(!open)} className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    {
                                        open ?
                                            <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            :
                                            <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                            </svg>
                                    }



                                </button>
                            </div>
                        </div>


                        <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${open ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
                            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                <Link to='/' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
                                <Link onClick={() => setOpen(!open)} to='/courses' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Courses</Link>
                                <a onClick={() => setOpen(!open)} href='#services' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Services</a>
                                <Link onClick={() => setOpen(!open)} to='/contact' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</Link>
                                {
                                    user?.uid ?
                                        <>
                                            <Link onClick={() => setOpen(!open)} to='/profile' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</Link>
                                            <a onClick={handleLogout} href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</a>
                                        </>

                                        :
                                        undefined
                                }

                            </div>

                            <div className="flex items-center mt-4 lg:mt-0">
                                {
                                    user?.uid ?
                                        <>
                                            {
                                                isAdmin === true ?
                                                    <Link
                                                        onClick={() => setOpen(!open)}
                                                        to='/dashboard'
                                                        className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                                        Dashboard
                                                    </Link>
                                                    :
                                                    <div onClick={() => setOpen(!open)}>
                                                        <Link
                                                            onClick={handleLogout}
                                                            className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">

                                                            <span className="mx-2">
                                                                Logout
                                                            </span>
                                                            <i className="fa-solid fa-right-to-bracket mx-2 text-white"></i>
                                                        </Link>
                                                    </div>
                                            }
                                        </>
                                        :
                                        <div className='flex items-center flex-col md:flex-row '>
                                            <Link to='/signin'
                                                onClick={() => setOpen(!open)}
                                                className="inline-flex font-semibold items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text- gray-700 hover:text-white transition-colors duration-300 hover:bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 border-2 border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                                <i className="fa-solid fa-right-to-bracket mx-2 hover:text-white text-gray-700"></i>

                                                <span className="mx-2">
                                                    Sign In
                                                </span>
                                            </Link>
                                            <Link to='/registration'
                                                onClick={() => setOpen(!open)}
                                                className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                                <i className="fa-solid fa-right-to-bracket mx-2 text-white"></i>

                                                <span className="mx-2">
                                                    Sign Up
                                                </span>
                                            </Link>
                                        </div>
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