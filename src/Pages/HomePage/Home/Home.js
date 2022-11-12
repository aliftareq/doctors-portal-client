import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';

const Home = () => {
    return (
        <div className='mx-5 border-2 border-red-500'>
            <Banner></Banner>
            <div className='flex justify-center'>
                <InfoCards></InfoCards>
            </div>
        </div>
    );
};

export default Home;