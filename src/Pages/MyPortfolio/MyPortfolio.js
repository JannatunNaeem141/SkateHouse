import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/Profile.jpg';

const MyPortfolio = () => {
    return (
        <div className='max-w-7xl mx-auto lg:my-16 lg:h-screen'>
            <div className='bg-cyan-100 p-10 rounded-lg shadow-lg'>
                <div>
                    <div className='grid lg:flex justify-center items-center'>
                        <div className='lg:w-1/4 text-center flex justify-center'>
                            <img className='lg:w-64 h-80 border-8 border-primary' src={profile} alt="" />
                        </div>
                        <div className='lg:w-1/2'>
                            <h2 className='text-center font-bold text-4xl mb-5'>Jannatun Naeem</h2>
                            <p>
                                Hi! My name is Naeem. I am a full stack web developer, looking to enhance my professional experience. I'm skilled with HTML5, CSS3, JavaScript, Python, React.js, Node.js, MongoDB etc.
                            </p>

                            <p>
                                My strength are being hard-working, easily adaptable to any kind of environment, and being hard-working, honest. Punctuate, self-motivated and team worker. But my weakness is I am not comfortable until I finished my work in the given time.
                            </p>

                            <p>
                                My short-term goal is to get a job in a reputed company in which I can grow my working skills and get more and more knowledge and gain financial independence. Besides my long-term goal is to become a more responsible and knowledgeable personality.
                            </p>

                            <p>
                                I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night. And to mention that coding is my all-time favorite.
                            </p>
                        </div>
                    </div>
                    <div className='mt-16 lg:w-3/4 mx-auto'>
                        <div className='grid md:flex lg:flex'>
                            <div className='w-1/2'>
                                <div className='mb-5'>
                                    <small className='text-primary'>Full Name</small>
                                    <p className='text-xl'>Jannatun Naeem</p>
                                </div>
                                <div className='mb-5'>
                                    <small className='text-primary'>Email Address</small>
                                    <p className='text-xl'>jannatunnaeem141@gmail.com</p>
                                </div>
                            </div>
                            <div className='mb-5 lg:w-1/2'>
                                <small className='text-primary'>Educational Background</small>
                                <p className='text-xl'>BSS (Hons)</p>
                                <p className='text-xl'>3rd Year</p>
                                <p className='text-xl'>Department of Economics</p>
                                <p className='text-xl'>Govt. Shaheed Suhrawardy College, Dhaka</p>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <p className='mb-5 text-primary'>Three of my Recent Projects:</p>
                            <Link to={{ pathname: '//corporate-sales-trainer.web.app/' }} className='btn btn-primary bg-transparent  mr-5 text-primary hover:bg-primary hover:text-white'>Project 1</Link>
                            <Link to='' target="_blank" className='btn btn-primary bg-transparent  mr-5 text-primary hover:bg-primary hover:text-white'>Project 2</Link>
                            <Link to={{ pathname: '//furniturehut-4239e.web.app/' }} target="_blank" className='btn btn-primary bg-transparent mt-5 lg:mt-0  mr-5 text-primary hover:bg-primary hover:text-white'>Project 3</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;