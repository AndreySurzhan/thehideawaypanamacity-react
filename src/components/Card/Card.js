import React from 'react'
import './Card.css';
import '../../shared/styles/elevation.css';
import MyCarousel from '../Carousel/MyCarousel';

export default function Card(props) {
  function getPropsClassNames(classNames) {
    return !classNames
      ? ""
      : classNames
        .split()
        .map(x => x.trim())
        .join(" ");
  }

  function getImage(image, key) {
    return (
      <div key={key}>
        <img
          style={image.style ?? {}}
          className={getPropsClassNames(image.className)}
          src={image.src}
          alt={image.alt}>
        </img>
        {image.description ? <h4 className="legend">{image.description}</h4> : null}
      </div>
    );
  }

  function getCarousel(images) {
    return (
      <div className="card-carousel">
        <MyCarousel>
          {images.map(getImage)}
        </MyCarousel>
      </div>
    );
  }

  return (
    <div style={props.style} className={"card elevation-4 " + getPropsClassNames(props.className)}>
      {
        props.carousel && props.images
          ? getCarousel(props.images)
          : getImage(props.image)
      }
      <div className="card-content">
        {props.title ? <h3>{props.title}</h3> : null}
        {props.subtitle ? <h4>{props.subtitle}</h4> : null}
        <p>{props.text}</p>
        {props.children}
      </div>
    </div>
  );
}
