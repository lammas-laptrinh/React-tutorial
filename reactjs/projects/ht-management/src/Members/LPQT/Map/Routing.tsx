import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet/dist/leaflet.css';

const createRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(10.945723695939119, 106.69041451011883),
      L.latLng(10.855244452717708, 106.62936726779068),
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