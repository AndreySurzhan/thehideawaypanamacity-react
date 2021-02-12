import React from 'react';
import Button from '../../components/Button/Button';
import './Header.css';

export default function Header() {
  function getPlayIcon() {
    return (<img alt="play button icon"
    src={require("../../assets/icons/play-button.png")}
    width={20}></img>)
  }

  return (
    <header className="header">
      <div className="header-title">
        <h2>Your Getaway Panama City, Florida</h2>      
        <p>
          Come stay at our vacation rentals. 
          We have 5 waterfront Hideaway Homes  in Panama City. 
          It is a privilege that you and yours spend your valuable time here with us. We hope that you find pleasure, relaxation and rejuvenation at our retreat(s). 
          Whether you are on vacation or business, we are here to serve you.
        </p>
      </div>
    </header>
  );
}