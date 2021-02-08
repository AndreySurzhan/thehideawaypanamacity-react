import React from 'react';
import './Card.css';
import '../../shared/styles/elevation.css';

export default function Card(props) {

  function getPropsClassNames(props) {
      return !props.className 
        ? ""
        : props
          .className
          .split()
          .map(x => x.trim())
          .join(" ");
  }

  return (
    <div style={props.style} className={"card elevation-4 " + getPropsClassNames(props)}>
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
      {props.title ? <h3>{props.title}</h3> : null}
      {props.subtitle ? <h4>{props.subtitle}</h4> : null}
      <p>{props.text}</p>
      {props.children}
    </div>
  );
}
