import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ScrollToTop from '../../../Shared/ScrollToTop/ScrollToTop';
import UserRow from './UserRow';

const AllUsers = () => {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const { register, handleSubmit } = useForm()
    const [size, setSize] = useState(10);
    const [userInfo, setUserInfo] = useState([])
    const [from, setFrom] = useState("")
    const [till, setTill] = useState("")
    const [search, setSearch] = useState("")
    const serarchRef = useRef()






    console.log(from, till)
    // serarch function with useRef
    const handleSearch = () => {
        setSearch(serarchRef.current.value)
    }

    // for getting all user by query and filter

    useEffect(() => {
        getAllUser()
    }, [page, size, search, from, till])

    const getAllUser = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/alluser?page=${page}&size=${size}&search=${search}&from=${from}&till=${till}`)
            .then(res => {
                console.log(res)
                setCount(res.data.count);
                setUserInfo(res.data.userData);
            })
    }

    const pages = Math.ceil(count / size);



    const onSubmit = (event) => {
        console.log(event)
        const newFrom = event.fro
        const newTill = event.til
        console.log(newFrom, newTill)
        setFrom(newFrom)
        setTill(newTill)
    }

    // user contect data  
    const roleContain = [
        {
            name: "View All",
            roleName: "viewall"
        },
        {
            name: "Rider",
            roleName: "rider"
        },
        {
            name: "Learner",
            roleName: "learner"
        }
    ]


    return (
        <div>
            <ScrollToTop />
            <section className="container px-4 mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Registered Users</h2>

                            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{userInfo.length} users</span>
                        </div>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">These companies have purchased in the last 12 months.</p>
                    </div>

                    <from onSubmit={handleSubmit(onSubmit)} className="flex items-center mt-4 gap-x-3">
                        <div className="flex items-center justify-between w-1/2 text-sm text-gray-700 transition-colors duration-200 bg-white rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                            <input type="text" placeholder="From" className=" placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border-2 border-gray-200 bg-white px-2 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 w-16"
                                {...register("fro")}
                                required
                            />
                            <h3>To</h3>
                            <input type="text" placeholder="Till" className="placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border-2 border-gray-200 bg-white px-2 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 w-16"
                                {...register("til")}
                                required
                            />

                        </div>

                        <button type='submit' className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                            Search by age
                        </button>
                    </from>
                </div>

                <div className="mt-6 md:flex md:items-center md:justify-between">
                    <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                        {
                            roleContain.map((data, i) =>
                                <button key={i} className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200  sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                                    {data.name}
                                </button>
                            )
                        }
                    </div>

                    <div className="relative flex items-center mt-4 md:mt-0">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>

                        <input ref={serarchRef} onChange={handleSearch} type="text" placeholder="Search by Name || Phone || Email" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-3 focus:outline-none">
                                                    <span>Company</span>

                                                    <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                        <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                        <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                    </svg>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Age
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Role
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Users</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">NID & Licence</th>
                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            userInfo?.map(data =>
                                                <UserRow
                                                    key={data._id}
                                                    data={data}
                                                />
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='mt-7'>
                    <div className="flex items-center justify-center">
                        <a href="#" className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>

                        <div className='flex items-center gap-3'>

                            {
                                [...Array(pages).keys()].map(number => <button
                                    key={number}
                                    className={page === number ? 'flex items-center justify-center px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200' : 'flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 border-2'}
                                    onClick={() => setPage(number)}
                                >
                                    {number + 1}
                                </button>)
                            }

                            <select className='border px-3 py-2 rounded outline-none' onChange={event => setSize(event.target.value)}>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="10" selected>10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </div>



                        <a href="#" className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllUsers;