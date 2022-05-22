import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Review = (props) => {
    const { name, img, description, rating } = props.review;
    return (
        <div className='p-5 flex'>
            <div className='flex justify-center mr-5'>
                <img src={img} alt="" className='h-16 w-20 rounded-full m-3 text-center' />
            </div>
            <div>
                <h4 className='m-0'>{name}</h4>
                <p className='font-bold flex'>Rating: <span className='font-normal '>{rating}</span><StarIcon className="h-5 w-5 text-primary " /></p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;