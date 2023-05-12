import React from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define a custom icon for the marker
const icon = L.icon({
  iconUrl: 'marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

export default function Map() {
  const mapRef = React.useRef<L.Map>(null);
  const [position, setPosition] = React.useState<[number, number]>([10.853049657597294, 106.80719688624798]);

  function handleClick(e: LeafletMouseEvent) {
    setPosition([e.latlng.lat, e.latlng.lng]);
  }

  function handleMapReady() {
    if (mapRef.current) {
      // You now have access to the initialized Leaflet.Map instance via mapRef.current
    }
  }

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh' }} whenReady={handleMapReady}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

