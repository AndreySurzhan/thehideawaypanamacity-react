import React from 'react';
import { Carousel}  from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './MyCarousel.css';

export default function MyCarousel(props) {
  return (
      <Carousel 
      showThumbs={false} 
      showIndicators={false} 
      swipeable
      dynamicHeight>
        {props.children}
      </Carousel>
  );
}