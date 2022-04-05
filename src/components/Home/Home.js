import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ProductBanner from '../ProductBanner/ProductBanner';
import Review from '../Review/Review';

const Home = () => {
    const [reviews] = useReviews()

    const homeReview = reviews.length > 3 ? reviews.slice(0, 3) : reviews
    return (
        <div>
            <ProductBanner></ProductBanner>
            <div className='home-review-container py-24 px-5 md:px-0'>
                <h3 className='text-center text-3xl'>Customer's Reviews {homeReview.length}</h3>
                <div className='container mx-auto grid md:grid-cols-3 gap-5 py-8'>
                    {
                        homeReview.map(item => <Review
                            key={item.id}
                            item={item}
                        ></Review>)
                    }
                </div>
                {
                    reviews.length > 3 && <div className='text-center mt-5 my-9'>
                        <Link className='bg-blue-400 hover:bg-blue-600 px-3 py-2 mt-3 text-white  rounded inline-block' to={'/reviews'}> View all reviews </Link>
                    </div>
                }

            </div>


        </div>
    );
};

export default Home;