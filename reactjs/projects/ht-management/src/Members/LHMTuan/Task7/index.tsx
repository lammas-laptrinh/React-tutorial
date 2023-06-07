import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import GgMap from "./ggmap";

export default function map() {
  return (
    <MapContainer
      center={[10.809544090470595, 106.70979133766049]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "calc(100vh - 4rem)" }}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[10.759511845731911, 106.7098104198916]}>
        <Popup>
          This is my house. <br /> Easily customizable.
        </Popup>
      </Marker>

      <Marker position={[10.855156642217352, 106.62940789533218]}>
        <Popup>
          This is my company. <br /> Easily customizable.
        </Popup>
      </Marker>

      <GgMap />
    </MapContainer>
  );
}
