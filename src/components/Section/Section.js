import React from 'react';
import './Section.css';

export default function Section(props) {
  return (
    <div style={props.style ?? {}} className="section">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}