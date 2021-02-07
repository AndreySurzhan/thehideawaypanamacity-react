import React from 'react';
import './Card.css';
import '../../shared/styles/elevation.css';

export default function Card(props) {

  return (
    <div style={props.style ?? {}} className="card elevation-4">
      {
        props.image
          ? (<img
              style={props.image.style ?? {}}
              className="elevation-6"
              src={props.image.src}
              alt={props.image.alt}>
            </img>)
          : undefined
      }
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
      <p>{props.text}</p>
      {props.children}
    </div>
  );
}
