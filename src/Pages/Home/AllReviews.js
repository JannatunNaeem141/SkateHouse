import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from './Review';

const AllReviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='my-16 max-w-7xl mx-auto h-screen'>
            <div className='grid grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default AllReviews;