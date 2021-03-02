import React from 'react';
import './NavMenu.css';
import { NavLink } from "react-router-dom";


export default function NavMenue(props) {
    function socialIcons() {
        return (
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.airbnb.com/users/140494398/listings">
                    <img className="social-icon"
                        src={require("../../assets/icons/airbnb.svg")}
                        alt="linkedin icon">
                    </img>
                </a>
            </li>
        );
    }

    function getManuClass(isVertical) {
        return ((isVertical ? "nav-menu-vertical" : "nav-menu-horizontal"))
    }

    function getShowClass(isVertical, isShown) {
        if(isVertical && isShown ){
            return "vertical-show";
        } else if(!isVertical && isShown ) {
            return "horizontal-show";
        } else if(!isShown && !isVertical) {
            return "horizontal-show";
        } else {
            return "";
        };
    }

    return (
            <ul id="nav-menu" className={getManuClass(props.isVertical) + " " + getShowClass(props.isVertical, props.isShown)}>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                {props.isVertical ? socialIcons() : null}
            </ul>
    );
}