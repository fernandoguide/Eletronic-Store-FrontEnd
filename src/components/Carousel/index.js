import React from 'react';
import { ImageSlider, ButtonSlider, CarouselSlider } from './styles';
import pubg from '../../assets/pubg.jpg';
import setup from '../../assets/setup.jpg';

export default function CarouselSlides() {
    return (
        <CarouselSlider
            // renderTopCenterControls={({ currentSlide }) => (
            //     <div>Slide: {currentSlide}</div>
            // )}
            renderCenterLeftControls={({ previousSlide }) => (
                <ButtonSlider onClick={previousSlide}>Back</ButtonSlider>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <ButtonSlider onClick={nextSlide}>Next</ButtonSlider>
            )}
        >
            <ImageSlider src={pubg} />
            <ImageSlider src={setup} />
            <ImageSlider src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
        </CarouselSlider>
    );
}
