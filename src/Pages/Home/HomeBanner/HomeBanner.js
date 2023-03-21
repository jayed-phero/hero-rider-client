import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../../Shared/ScrollToTop/ScrollToTop';

const HomeBanner = () => {
    return (
        <div>
            <ScrollToTop />
            <section className="bg-gray-800 text-gray-100">
                <div className="max-w-6xl xl:px-0 flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center xl:px-0 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">World best
                            <span className="text-violet-400"> Ride  Sharing</span> Company
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Our goals is to provide high quality services for our client
                            <br className="hidden md:inline lg:hidden" />  stay connected with us .
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" to='/contact' className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Contact</Link>
                            <a rel="noopener noreferrer" href="#services" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Services</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96  rounded-xl">
                        <img src="https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?size=626&ext=jpg&ga=GA1.2.1817583408.1678734770&semt=sph" alt="" className="object-contain h-72 sm:h-80 lg:h-96 rounded-2xl" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeBanner;