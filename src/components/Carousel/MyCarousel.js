import React from 'react'
import Carousel, {arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Button from '../../components/Button/Button';
import './MyCarousel.css';

export default function MyCarousel(props) {
  const arrorStyle = {
    padding: "0.5rem",
    borderRadius: "50%",
    margin: "1rem",
    width: "15px",
    boxSizing: "content-box"
  }

  return (
    <div className="carousel">
      <Carousel
        plugins={[
          'clickToChange',
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (<Button style={arrorStyle}>{"<<"}</Button>),
              arrowLeftDisabled: (<Button disabled style={arrorStyle}>{"<"}</Button>),
              arrowRight: (<Button style={arrorStyle}>{">>"}</Button>),
              arrowRightDisabled: (<Button disabled style={arrorStyle}>{">"}</Button>),
              addArrowClickHandler: true,
            }
          }
        ]}
      >
        {props.children}
      </Carousel>
    </div>
  );
}