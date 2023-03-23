import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getImageTwoUrl, getImageUrl, getPersonalPhotoURL } from '../../../api/ImageHosting';
import { AuthProvider } from '../../../Context/AuthContext';
import ScrollToTop from '../../../Shared/ScrollToTop/ScrollToTop';
import SmallSpinner from '../../../Shared/Spinner/SmallSpinner';

const LearnerRegistration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, createUser, updateUserProfile } = useContext(AuthProvider)
    console.log(user)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)
        const email = data.email
        const name = data.name
        const password = data.password
        const confirmPassword = data.confirmPassword
        const personalPhoto = data.personalPhoto[0]
        const nid = data.nid[0]
        const address = data.address
        const phone = data.phone
        const age = data.age
        const vehicleType = data.vehicleType

        if (password === confirmPassword) {
            setError("")
            setLoading(true)
            getPersonalPhotoURL(personalPhoto)
                .then(photoLink => {
                    console.log(photoLink)

                    getImageUrl(nid)
                        .then(nidLink => {
                            console.log(nidLink)

                            // create user 
                            createUser(email, password)
                                .then(result => {
                                    const user = result.user
                                    console.log(user)
                                    updateUserProfile(name, photoLink)
                                    const currentUserData = {
                                        personalPhoto: photoLink,
                                        email: user?.email,
                                        name: name,
                                        phone: phone,
                                        age: age,
                                        address,
                                        nid: nidLink,
                                        vehicleType,
                                        role: "learner"
                                    }
                                    console.log(currentUserData)
                                    axios.put(`${process.env.REACT_APP_API_URL}/users/${user?.email}`, currentUserData)
                                        .then(res => {
                                            console.log(res.data)
                                            if (res.data?.result?.acknowledged === true) {
                                                toast.success("User Created Successfully")
                                                setLoading(false)
                                                navigate('/courses')
                                            }
                                        })
                                        .catch(err => {
                                            console.log(err)
                                            setLoading(false)
                                            toast.error("Something was wrong try again")
                                        })

                                })
                                .catch(err => {
                                    console.log(err)
                                    setError(err.message)
                                    setLoading(false)
                                    toast.error(err?.message)
                                })
                        })
                })

        } else {
            toast.error("Passwod does'n match")
            setError("Passwod does'n match")
            return
        }



    }

    return (
        <div>
            <ScrollToTop />
            <section className="max-w-4xl p-6 mx-auto bg-green-50 rounded-3xl lg:rounded-none rounded-md shadow-md dark:bg-gray-800 my-11">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center mb-7 px-5 py-3 bg-blue-500 w-64 mx-auto text-white">Learner Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='flex items-start flex-col lg:flex-row gap-7 '>
                    <div className='max-w-md'>
                        <div>
                            <div>
                                <div className=''>
                                    <label for="username" className="block text-sm text-gray-500 dark:text-gray-300">Username</label>

                                    <input type="text" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border-2 border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                        {...register("name")}
                                        required
                                    />
                                </div>
                                <div className='mt-4'>
                                    <label className="block text-sm text-gray-500 dark:text-gray-300" for="password">Email</label>
                                    <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        {...register("email")}
                                        required
                                    />
                                </div>
                                <div className='flex items-center gap-5 mt-4 flex-col md:flex-row w-full'>
                                    <div className='md:w-1/3 w-full'>
                                        <label className="block text-sm text-gray-500 dark:text-gray-300" for="emailAddress">Age</label>
                                        <input type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            {...register("age")}
                                            required
                                        />
                                    </div>
                                    <div className='mt-4 md:mt-0 md:flex-1 w-full'>
                                        <label className="block text-sm text-gray-500 dark:text-gray-300" for="emailAddress">Phone</label>
                                        <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            {...register("phone")}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <label className="block text-sm text-gray-500 dark:text-gray-300">Address</label>
                                    <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        {...register("address")}
                                    />
                                </div>
                                <div className='mt-4'>
                                    <label for="image" className="block text-sm text-gray-500 dark:text-gray-300">Personal Photo</label>

                                    <input type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                                        {...register("personalPhoto")}
                                        required
                                    />
                                </div>

                                <div className='flex items-center gap-5 mt-4 flex-col md:flex-row w-full'>
                                    <div className='w-full'>
                                        <label className="block text-sm text-gray-500 dark:text-gray-300" for="emailAddress">Password</label>
                                        <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            {...register("password")}
                                            required
                                        />
                                    </div>
                                    <div className='mt-4 md:mt-0 w-full'>
                                        <label className="block text-sm text-gray-500 dark:text-gray-300" >Confirm Password</label>
                                        <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            {...register("confirmPassword")}
                                            required
                                        />
                                    </div>
                                </div>
                                <p className='text-red-500 text-md pt-2'>{error}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div>
                            <label for="image" className="block text-sm text-gray-500 dark:text-gray-300">NID Card</label>

                            <input type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                                {...register("nid")}
                            />
                        </div>
                        <img
                            className='w-full h-56 rounded-lg my-5'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQwRZKjYEEZtFUDQ_HOJPeerijRXuUBRs2w&usqp=CAU'
                        />

                        <div className='mt-4 md:mt-0 w-full'>
                            <label className="block text-sm text-gray-500 dark:text-gray-300" >Vehicle Type</label>
                            <select type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                {...register("vehicleType")}
                            >
                                <option selected value='bike'>Bike</option>
                                <option value='car'>Car</option>
                            </select>
                        </div>

                        <button
                            type='submit'
                            className="md:mt-5 inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-44 h-11 flex items-center justify-center sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            <i className="fa-regular fa-closed-captioning mx-2 text-white"></i>

                            <span className="mx-2">
                                {
                                    loading ?
                                        <SmallSpinner />
                                        :
                                        "Sign Up"
                                }
                            </span>
                        </button>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default LearnerRegistration;