import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    // Use custom hook to get review data
    const [reviews] = useReviews()
    return (
        <div className='py-24 px-5 md:px-0'>
            < h3 className='text-center text-3xl font-medium decoration-gray-600 uppercase' > Our all client's reviews ({reviews.length})</h3>
            < div className='container mx-auto grid md:grid-cols-3 gap-5 py-8' >

                {
                    reviews.map(item => <Review
                        key={item.id}
                        item={item}
                    ></Review>)
                }
            </div >
        </div >
    );
};

export default Reviews;