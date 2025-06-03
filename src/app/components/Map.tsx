import "./Map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

// import { Icon, divIcon, point } from "leaflet";

export default function Map() {
  return (
    <MapContainer center={[19.180425381149217, 72.95383080813369]} zoom={25}>
      {/* OPEN STREET MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}