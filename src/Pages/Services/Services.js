import React from 'react';
import ScrollToTop from '../../Shared/ScrollToTop/ScrollToTop';
import RowOfService from './RowOfService';

const Services = () => {
    const services = [
        {
            title: "Awesome Service with seven trails",
            desc: "Distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum desktop publishing packages.",
            sortName: "Basics"
        },
        {
            title: "Car Driving with extra serivces",
            desc: "Uncover many web sites still in their infancy. Various versions have evolved over the years. desktop publishing packages.",
            sortName: "Extra"
        },
        {
            title: "Complete two order get Payment",
            desc: "Making it look like readable English. Many desktop publishing packages and web page editors now desktop publishing packages.",
            sortName: "Payment"
        },
        {
            title: "Get signup bounes for five order",
            desc: "Still in their infancy. Various versions have evolved over the years, sometimes by accident desktop publishing packages.",
            sortName: "Five Order"
        },
        {
            title: "Share and get huge payment",
            desc: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text desktop publishing packages.",
            sortName: "Sharing"
        },
        {
            title: "Enrolling bounes for our student",
            desc: "It has a more - or - less normal distribution of letters, as opposed to using 'Content here desktop publishing packages",
            sortName: "Learning"
        }
    ]
    return (
        <div>
            <ScrollToTop />
            <section id='services' class="bg-white dark:bg-gray-900">
                <div class="max-w-6xl px-6 py-10 mx-auto">
                    <div class="flex items-center justify-between">
                        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white pb-7">Our High Quality Offers </h1>
                    </div>

                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {
                            services.map((service, i) =>
                                <RowOfService
                                    key={i}
                                    service={service}
                                />
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;