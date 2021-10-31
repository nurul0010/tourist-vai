import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Carousel/Carousel.css';

const CarouselPart = () => {
    return (
        <Carousel id='home'>
            <Carousel.Item className='section' interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Explore the world</h3>
                    <p>feel your life by enjoy. for these its a better idea to explore the hole world</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='section' interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://oibnews.com/wp-content/uploads/2021/05/trek.jpeg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Enjoy your company</h3>
                    <p>For living better life you have to enjoy with yourself</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='section' interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Save money and travel</h3>
                    <p>Travel is the best thing for enjoy life. hare you can find every thing you want</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselPart;