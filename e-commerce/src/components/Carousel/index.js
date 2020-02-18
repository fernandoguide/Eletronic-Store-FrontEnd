import React from 'react';
import Carousel from 'nuka-carousel';

export default function CarouselSlider() {
    return (
        <Carousel
            // renderTopCenterControls={({ currentSlide }) => (
            //     <div>Slide: {currentSlide}</div>
            // )}
            renderCenterLeftControls={({ previousSlide }) => (
                <button onClick={previousSlide}>Previous</button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button onClick={nextSlide}>Next</button>
            )}
        >
            <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
            <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
            <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
            <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
            <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
            <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
        </Carousel>
    );
}
