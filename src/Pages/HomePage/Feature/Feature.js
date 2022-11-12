import React from 'react';
import treatImg from '../../../assets/images/treatment.png'

const Feature = () => {
    return (
        <div className="rounded-md lg:my-16">
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-28">
                <div className='lg:w-1/3 lg:mx-4'>
                    <h1 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <img src={treatImg} className=" w-full lg:w-1/3 lg:h-96 lg:mx-4 rounded-lg shadow-2xl" alt='featur-img' />
            </div>
        </div>
    );
};

export default Feature;