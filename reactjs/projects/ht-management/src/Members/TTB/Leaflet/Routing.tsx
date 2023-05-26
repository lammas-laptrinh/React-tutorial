import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet/dist/leaflet.css';

const createRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(10.852887452499173, 106.80728364493575),
      L.latLng(10.855642243775234, 106.7850942590181),
    ],
    lineOptions: {
      styles: [{ color: "red", opacity: 1, weight: 5 }],
      extendToWaypoints: false,
      missingRouteTolerance: 10,
      addWaypoints: false,
    },
  });
  // Make markers undraggable
  instance.on('waypointset', (event) => {
    event.waypoint.marker.setWaypointDraggable(false);
  });
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;