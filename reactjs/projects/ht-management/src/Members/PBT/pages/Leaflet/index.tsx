import { Marker, Popup } from "react-leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import RoutingMachine from "./RoutingMachine";

function Leaflet() {
  const position = L.latLng(10.849730, 106.634178);
  return (
    <MapContainer
      center={[10.8193, 106.6367]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <RoutingMachine />
      <Marker position={position}>
        <Popup>
          Đây là đánh dấu tại vị trí ({position.lat}, {position.lng}).
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Leaflet;
