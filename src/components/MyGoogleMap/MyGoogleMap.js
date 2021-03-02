import React from 'react';
import './MyGoogleMap.css';


export default function MyGoogleMap(props) {
  return (
    <div id="google-map-container">
      <iframe
        title="google maps"
        frameBorder="0"
        style={{border:0}}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNSbo-BsBbb-gLh4-SGFHFHd-2-nFgSH8&q=2307+Mound+Ave,+Panama+City,+FL+32405">
      </iframe>
    </div>
  );
}