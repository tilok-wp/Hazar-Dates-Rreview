import React from 'react';
import useReviews from '../../hooks/useReviews';
import ProductBanner from '../ProductBanner/ProductBanner';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews()

    return (
        <div>
            <ProductBanner></ProductBanner>
            <h3 className='text-center'>customer's Reviews</h3>

            <div className='grid md:grid-cols-3 gap-5'>
                {
                    reviews.map(item => <Review
                        key={item.id}
                        item={item}
                    ></Review>)
                }
            </div>


        </div>
    );
};

export default Home;