import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-10'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Feature></Feature>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;