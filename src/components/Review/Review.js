import React from 'react';

const Review = (props) => {
    const { name, ratings, reviewText, userImg } = props.item
    return (
        <div className='shadow-lg border-2 border-indigo-500/10 p-8 rounded-lg text-center'>
            <div className='flex justify-center'>
                <img className='rounded-full border-4' src={userImg} alt="user" />
            </div>
            <h3 className='text-2xl mb-3'>{name}</h3>
            <p title={reviewText}>{
                reviewText.length > 80 ? reviewText.slice(0, 80) + " ..." : reviewText
            }</p>
            <div>
                <p className='mt-3 text-left'>Ratings: <strong>{ratings}</strong></p>

            </div>
        </div>
    );
};

export default Review;