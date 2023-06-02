
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import "leaflet-routing-machine";
import RoutingMachine from "./Routing";

export default function Map() {
    return (
        <MapContainer
            center={[10.8981541984873, 106.69259211186768]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "calc(100vh - 4rem)" }}
        >
            <TileLayer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <RoutingMachine />
        </MapContainer>
    );
};

