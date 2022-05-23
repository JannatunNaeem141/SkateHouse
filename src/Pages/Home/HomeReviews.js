import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from './Review';

const HomeReviews = (props) => {
    const [reviews, setReviews] = useReviews();
    const sixReview = [...reviews].reverse().slice(0, 6);
    return (
        <div className='my-16 max-w-7xl mx-auto'>
            <h1 className='text-center font-bold text-4xl text-primary mb-12'>Customer Reviews</h1>
            <div className=''>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        sixReview.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
            <div className='text-center mt-12'>
                <Link to="/reviews" className='btn bg-primary text-white border-primary hover:bg-secondary hover:border-secondary'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default HomeReviews;