import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                reviews.map(item => <Review
                    key={item.id}
                    item={item}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;