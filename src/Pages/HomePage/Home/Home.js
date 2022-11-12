import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5 border-2 border-red-500'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Feature></Feature>
        </div>
    );
};

export default Home;