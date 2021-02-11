import React from 'react';
import GoogleMap  from 'google-map-react';
export default function MyGoogleMap(props) {
    const renderMarkers = (map, maps) => 
        new maps.Marker({
                position: { lat: props.position.lat, lng: props.position.lng },
                map,
                lable: props.title
            });

  return (
      <div id="google-map-container">
        <GoogleMap          
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          options={getMapOptions(props)}
          zoom={props.zoom}
          center={props.center}
          onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
        >
        </GoogleMap>
      </div>
  );
}

const getMapOptions = (props) => (maps) => {

    return {    
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: maps.ControlPosition.TOP_LEFT
        }
    };
}