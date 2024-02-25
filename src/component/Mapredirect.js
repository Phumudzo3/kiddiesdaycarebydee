import React from 'react';

const MapRedirect = () => {
  const redirectToGoogleMaps = () => {
    const latitude = -23.196168; // Example latitude
    const longitude = 30.538387; // Example longitude
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <div>
     
      <button onClick={redirectToGoogleMaps}>Get location</button>
    </div>
  );
};

export default MapRedirect;
