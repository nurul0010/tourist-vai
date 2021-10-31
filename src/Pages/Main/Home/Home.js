import React from 'react';
import Footer from '../../Footer/Footer';
import Aboutus from '../Aboutus/Aboutus';
import CarouselPart from '../Carousel/CarouselPart';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <CarouselPart></CarouselPart>
            <Services></Services>
            <Aboutus></Aboutus>
            <Footer></Footer>
        </div>
    );
};

export default Home;