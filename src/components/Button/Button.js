import React from 'react';
import './Button.css';
import '../../shared/styles/elevation.css';

export default function Button(props) {

  return (
      props.url 
      ? <a className="button ripple elevation-4" 
            target="_blank" 
            rel="noopener noreferrer"
            href={props.url}
            style={props.style}
            onClick={props.onClick}>
          {props.children}
        </a> 
      : <button className="button ripple elevation-4"
                style={props.style}
                onClick={props.onClick}>
          {props.children}
        </button>
  );
}