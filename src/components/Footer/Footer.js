import React from 'react';
import MyGoogleMap from '../MyGoogleMap/MyGoogleMap';
import './Footer.css';

export default function Footer() {
  const position = {
    lat: 30.191344145577702,
    lng: -85.71398462443666
  }
  const googleMapProps = {
    position,
    center: position,
    isMarkerShown: true,
    zoom: 9,
    title: '2307 Mound Ave, Panama City, FL 32405'
  };

  return (
    <footer>
      <div id="google-map-container">
        <MyGoogleMap {...googleMapProps}></MyGoogleMap>
      </div>

      <p>© 2021, created with passion and love by <a href="https://www.linkedin.com/in/andreisurzhan/">Andrei Surzhan</a></p>
    </footer>
  );
}