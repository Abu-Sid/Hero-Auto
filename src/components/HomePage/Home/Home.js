import React, { useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';
import Location from '../Location/Location';
import Provider from '../Provider/Provider';
import Services from '../Service/Service';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    useEffect(() => {
        document.title = 'hero-auto - home';
    }, [])
    return (
        <div>
            <Navbar/>
            <Header/>
            <Feature/>
            <Services/>
            <Team/>
            <Provider/>
            <Testimonials></Testimonials>
            <Location/>
            <Footer/>
        </div>
    );
};

export default Home;