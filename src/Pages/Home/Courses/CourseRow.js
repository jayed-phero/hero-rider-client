import React from 'react';
import { Link } from 'react-router-dom';

const CourseRow = ({ course }) => {
    const { image, price, desc, title, _id } = course
    return (
        <div>
            <div className="flex max-w-md overflow-hidden flex-col md:flex-row  rounded-lg shadow-lg bg-gray-800">
                <div className="md:w-1/3 w-full bg-cover">
                    <img
                        className='h-full w-full bg-cover'
                        src={image}
                    />
                </div>

                <div className=" w-full md:w-2/3 p-4 md:p-4">
                    <h1 className="text-xl font-bold text-white">{title}</h1>

                    <p className="mt-2 text-sm text-gray-400">{desc}</p>

                    <div className="flex mt-2 item-center">
                        {
                            [1, 2, 3, 4].map((icon, i) =>
                                <svg key={i} className="w-5 h-5 fill-current text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            )
                        }

                        <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                    </div>

                    <div className="flex justify-between mt-3 item-center">
                        <h1 className="text-lg font-bold text-blue-500 md:text-xl">{price}$</h1>
                        <Link
                            to={`/payment/${_id}`}
                            className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform flex items-center jusitfy-center rounded bg-gray-700 hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Enroll Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseRow;