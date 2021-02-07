import React from 'react';
import './Burger.css';

export default function Burger(props) {
    function handleClick(event) {
        event.preventDefault();
        props.onClick();
    }

    return (
        <div
            id="burger"
            aria-label="Toggle menu"
            onClick={handleClick}
            className={props.isClicked ? "burger-is-clicked" : ""}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
