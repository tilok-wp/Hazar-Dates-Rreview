import React from 'react';
import productImage from './../../images/Hajar-dates.jpg'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const ProductBanner = () => {
    return (
        <section className='md:grid grid-cols-2 bg-neutral-200'>
            <div className='flex justify-center'>
                <img src={productImage} alt="" />
            </div>
            <div className='flex flex-col justify-center p-5 md:py-5'>
                <h2 className='text-3xl font-medium decoration-gray-600 uppercase'>Made In Nature | Organic Deglet Hajar Dates</h2>
                <p>Our Nature Organic Hajar Dates are plump and handpicked from trees in the hot Tunisian desert where the cool underground water tickles their dried date toes.
                </p>
                <ul className='mt-3'>
                    <li> <CheckCircleIcon class="inline-block h-4 mr-2 w-4 text-blue-500" />NATURALLY SWEET AND DELICIOUS</li>
                    <li> <CheckCircleIcon class="inline-block h-4 mr-2 w-4 text-blue-500" /> GUILT FREE</li>
                    <li> <CheckCircleIcon class="inline-block h-4 mr-2 w-4 text-blue-500" />ORGANIC DRIED DATES</li>
                </ul>
                <div>
                    <Link className='bg-blue-400 hover:bg-blue-600 px-3 py-2 mt-3 text-white  rounded inline-block' to={'/reviews'}> Learn more </Link>

                </div>

            </div>
        </section>
    );
};

export default ProductBanner;