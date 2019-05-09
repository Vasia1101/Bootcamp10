import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";

const google = (window.google = window.google ? window.google : {});

const Map = ({ getInfo, lat, lng, city, country }) => (
  <GoogleMap
    onClick={getInfo}
    defaultZoom={4.5}
    center={{ lat: lat, lng: lng }}
  >
    <MarkerWithLabel
      position={{ lat: lat, lng: lng }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{
        fontSize: "1.3rem",
        fontWeight: "700",
        backgroundColor: "white",
        color: "black",
        padding: "0.3rem 0.5rem 0.2rem",
        borderRadius: "30px"
      }}
    >
      <div>
        {city ? city : "Somewhere on"},{country ? country : "Planet Earth"}
      </div>
    </MarkerWithLabel>
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(Map));

// ------------------------- v2 --------------------
// import React from "react";
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import MapList from "./MapList";

// const Map = withScriptjs(withGoogleMap((props) =>{

//   const markers = props.doctors.map( doctor => <MapList
//                     key={doctor.uid}
//                     doctor={doctor}
//                     location={{lat: 49.55, lng: 25.58}}
//                   />);

//   return (
//       <GoogleMap
//         defaultZoom={14}
//         center={ {lat: 49.55, lng: 25.58} }
//         >
//         {markers}
//       </GoogleMap>
//     );
//   }
// ))

// export default Map;
