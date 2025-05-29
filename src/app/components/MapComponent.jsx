'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useRef } from 'react';

// Custom marker icon URL — you can change this to any pin image URL or base64
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // nice pin icon from flaticon
  iconSize: [35, 45],
  iconAnchor: [17, 45], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -40],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/mYASuUYFsTraSU7d6';

const MapComponent = () => {
  const markerRef = useRef(null);

  useEffect(() => {
    // No popup here because we are opening google maps instead on click
  }, []);

  // On clicking marker or map, open Google Maps
  const openGoogleMaps = () => {
    window.open(GOOGLE_MAPS_URL, '_blank');
  };

  return (
    <MapContainer
      center={[19.180425381149217, 72.95383080813369]}
      zoom={15}
      style={{ height: '400px', width: '100%', borderRadius: '1rem', cursor: 'pointer' }}
      whenCreated={(map) => {
        map.on('click', openGoogleMaps); // clicking anywhere on map opens google maps
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={customIcon}
        position={[19.180425381149217, 72.95383080813369]}
        eventHandlers={{
          click: openGoogleMaps,
        }}
      />
    </MapContainer>
  );
};

export default MapComponent;
