import React from 'react';
import Carousel from 'nuka-carousel';
import { ImageSlider, ButtonSlider } from './styles';
import pubg from '../../assets/pubg.jpg';
import setup from '../../assets/setup.jpg';

export default function CarouselSlider() {
    return (
        <Carousel
            // renderTopCenterControls={({ currentSlide }) => (
            //     <div>Slide: {currentSlide}</div>
            // )}
            renderCenterLeftControls={({ previousSlide }) => (
                <ButtonSlider onClick={previousSlide}>Previous</ButtonSlider>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <ButtonSlider onClick={nextSlide}>Next</ButtonSlider>
            )}
        >
            <ImageSlider src={pubg} />
            <ImageSlider src={setup} />
            <ImageSlider src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
        </Carousel>
    );
}
