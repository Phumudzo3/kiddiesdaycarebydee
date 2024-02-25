import React from 'react'
import GoogleMapReact from 'google-map-react';
import './map.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const Map = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div className='map-box'>
         <div className='map-map-ds' style={{ height: '60vh', width: '80%',border:'1px solid black',marginLeft:'auto',marginRight:'auto'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        style={{}}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </div>
   
  )
}
