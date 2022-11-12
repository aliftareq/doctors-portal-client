import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5 border-2 border-red-500'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
        </div>
    );
};

export default Home;