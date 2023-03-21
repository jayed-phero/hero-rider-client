import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const courseData = useLoaderData()
    const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);
    console.log(stripePromise)
    return (
        <div className='max-w-4xl border-4 border-gray-200 shadow-lg rounded-2xl my-5 mx-auto px-5 xl:px-0 py-11'>
            <h3 className='text-2xl md:text-4xl font-bold pb-5 text-center'>Payment with <span className='text-blue-600'> Stripe</span></h3>
            <div className='flex items-start flex-col md:flex-row'>
                <div className='w-full bg-blue-100'>

                </div>
                <div className='max-w-md p-5 w-full mt-7'>
                    <h2 className='text-xl pb-7'>Card Inforamtion</h2>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            courseData={courseData}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;