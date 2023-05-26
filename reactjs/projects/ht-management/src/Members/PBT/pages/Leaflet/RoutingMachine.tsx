
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";

const createRoutingMachineLayer = () => {
  const routeControl = L.Routing.control({
    waypoints: [
      L.latLng(10.849730, 106.634178), 
      L.latLng(10.789800, 106.651817), 
    ],
    lineOptions: {
      styles: [{ color: "red", opacity: 1, weight: 4 }],
      extendToWaypoints: false,
      missingRouteTolerance: 10,
      addWaypoints: true,
    },
  });

  routeControl.on("waypointset", (event) => {
    event.waypoint.Marker.setWaypointDraggable(false);
  });
  return routeControl;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;
