import React from 'react';
import './Backdrop.css';

export default function Backdrop(props) {
    const backdropStyles = props.zIndex ? { zIndex: props.zIndex } : { zIndex: 2 };
    
    function handleClick(event) {
        event.preventDefault();
        props.onClick();
    }

    function getPropsClassNames(props) {
        return props
            .className
            .split()
            .map(x => x.trim())
            .join(" ");
    }
    
    return (
        <div className={"backdrop " + getPropsClassNames(props)}
            style={backdropStyles} 
            onClick={handleClick}>
        </div>
    );
}