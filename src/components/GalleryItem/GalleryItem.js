import React from 'react';
import './GalleryItem.css';

export default function GalleryItem(props) {

  return (
    <div style={props.style} className="gellery-item">
        {props.children}
    </div>
  );
}