import React from 'react';
import './Button.css';
import '../../shared/styles/elevation.css';

export default function Button(props) {
  function getPropsClassNames(classNames) {
    return !classNames
      ? ""
      : classNames
        .split()
        .map(x => x.trim())
        .join(" ");
  }

  return (
      props.url 
      ? <a disabled={props.disabled} 
            className={"button ripple elevation-4 "  + getPropsClassNames(props.className)}
            target="_blank" 
            rel="noopener noreferrer"
            href={props.url}
            style={props.style}
            onClick={props.onClick}>
          {props.children}
        </a> 
      : <button disabled={props.disabled}
                className={"button ripple elevation-4 " + getPropsClassNames(props.className)}
                style={props.style}
                onClick={props.onClick}>
          {props.children}
        </button>
  );
}