import React from 'react';
import './Gallery.css';
import '../../shared/styles/elevation.css';

export default function Gallery(props) {
    return (
        <div className={`gallery ${props.isFlexGrow ? "gallery-is-flex-grow" : ""}`}>
            {props.children}
        </div>
    );
}
