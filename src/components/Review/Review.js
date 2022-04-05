import React from 'react';
import { StarIcon } from '@heroicons/react/solid'

const Review = (props) => {
    const { name, ratings, reviewText, userImg } = props.item

    return (
        <div className='shadow-lg border-2 border-indigo-500/10 p-8 rounded-lg text-center relative'>
            <div className='flex justify-center'>
                <img className='rounded-full border-4' src={userImg} alt="user" />
            </div>
            <h3 className='text-2xl mb-3'>{name}</h3>
            <p title={reviewText}>{
                reviewText.length > 120 ? reviewText.slice(0, 120) + " ..." : reviewText
            }</p>
            <div className='absolute top-0 right-0 rounded px-4 bg-blue-100'>
                <p>Ratings: <strong>{ratings}</strong></p>
            </div>
            {
                [...Array(ratings)].map((item, index) => <StarIcon key={index} className="h-5 w-5 text-yellow-400 inline-block"></StarIcon>)
            }

        </div>
    );
};

export default Review;