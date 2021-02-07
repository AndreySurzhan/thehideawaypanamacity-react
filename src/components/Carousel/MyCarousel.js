import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './MyCarousel.css';

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      value: 0,
      slides: props.children,
    }
    this.onchange = this.onchange.bind(this);
  }

  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div className="carousel">
        <Carousel
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
          infinite={true}
          autoPlay={2000}
          animationSpeed={1000}
        />
        <Dots 
          value={this.state.value} 
          onChange={this.onchange} 
          number={this.state.slides.length} />
      </div>
    );
  }
}