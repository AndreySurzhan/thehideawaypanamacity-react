import React from 'react';
import './Button.css';
import '../../shared/styles/elevation.css';

export default function Button(props) {

  return (
    <button className="ripple elevation-4" style={props.style} onClick={props.onClick}>
      {props.children}
    </button>
  );
}