import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from './Review';

const HomeReviews = (props) => {
    const [reviews, setReviews] = useReviews();
    const sixReview = [...reviews].reverse().slice(0, 6);
    return (
        <div className='my-16 max-w-7xl mx-auto'>
            <h1 className='text-center font-bold text-4xl text-primary'>Customer Reviews</h1>
            <div className='divider mb-12'></div>
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        sixReview.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
            <div className='text-center mt-12'>
                <Link to="/reviews" className='btn bg-primary text-white border-primary hover:text-primary hover:bg-transparent hover:border-primary'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default HomeReviews;